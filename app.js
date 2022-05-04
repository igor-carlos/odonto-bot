import express from 'express'
import twilio from 'twilio'
import { handleMessage } from './message-processor.js'
import { firstMessage } from './constant-messages.js'

import redis from 'redis'

const client = redis.createClient({
  url: "redis://127.0.0.1:6379"
})

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

await client.connect()

app.post("/message/receive", async function (req, res) {
  const choice = req.body.Body
  const user = req.body.From

  if (choice === '/reset') await client.del(`${user}-last-interaction`)

  const lastInteraction = await client.get(`${user}-last-interaction`)

  let lastInteractionObj
  let lastTemplateId
  let lastDate

  if (lastInteraction) {
    lastInteractionObj = JSON.parse(lastInteraction)
    lastTemplateId = lastInteractionObj.lastTemplateId
    lastDate = lastInteractionObj.lastDate
  }

  let reply
  if (!lastTemplateId || (lastDate - new Date()) >= 1.8e+7) {
    reply = firstMessage()
  } else {

    reply = handleMessage(
      choice.length <= 2 ? Number(choice) : choice,
      Number(lastTemplateId))
  }

  await client.set(`${user}-last-interaction`, JSON.stringify({
    lastTemplateId: reply.templateId,
    lastDate: new Date()
  }))

  const twiml = new twilio.twiml.MessagingResponse()
  twiml.message(reply.body)
  res.writeHead(200, { 'Content-Type': 'text/xml' })
  res.end(twiml.toString())
})

app.post("/message/receive-status", function (req, res) {
  res.status(200).end()
})

app.listen(3000, () => {
  console.info("server running in 3000")
})
