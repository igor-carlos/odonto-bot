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

  const lastTemplateId = await client.get(`${user}-last-template-id`)

  let reply
  if (lastTemplateId === null) {
    reply = firstMessage()
  } else {
    reply = handleMessage(choice, Number(lastTemplateId))
  }

  await client.set(`${user}-last-template-id`, reply.templateId)

  const twiml = new twilio.twiml.MessagingResponse()
  twiml.message(reply.body)
  res.writeHead(200, { 'Content-Type': 'text/xml' })
  res.end(twiml.toString())
})

app.post("/message/receive-status", function (req, res) {
  res.status(200).end()
})

app.listen(3000, () => {
  console.log("🔥 3000")
})
