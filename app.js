import express from 'express'
import twilio from 'twilio'
import { handleMessage } from './message-processor.js'
import { finishingOne, firstMessage } from './constant-messages.js'

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

  if (choice === '/reset') {
    await client.del(`${user}-last-interaction`)
    const twiml = new twilio.twiml.MessagingResponse()
    twiml.message('👽 reset all !')
    res.writeHead(200, { 'Content-Type': 'text/xml' })
    return res.end(twiml.toString())
  }

  const lastInteraction = await client.get(`${user}-last-interaction`)

  let lastInteractionObj
  let lastTemplateId
  let lastDate
  let scheduledAppointmentDate
  let scheduledAppointmentTime

  if (lastInteraction) {
    lastInteractionObj = JSON.parse(lastInteraction)

    console.log('lastInteractionObj =>', lastInteractionObj)

    lastTemplateId = lastInteractionObj.lastTemplateId
    lastDate = lastInteractionObj.lastDate
    scheduledAppointmentDate = lastInteractionObj.lastScheduledAppointmentDate
    scheduledAppointmentTime = lastInteractionObj.lastScheduledAppointmentTime
  }

  const finishings = [
    finishingOne.templateId
  ]

  let reply
  if (!lastTemplateId || finishings.includes(lastTemplateId) || (lastDate - new Date()) >= 1.8e+7) {
    reply = firstMessage()
  } else {
    reply = handleMessage(
      choice.length <= 2 ? Number(choice) : choice,
      Number(lastTemplateId),
      scheduledAppointmentDate,
      scheduledAppointmentTime
    )
  }

  let objToStringify = {
    lastTemplateId: reply.templateId,
    lastDate: new Date(),
  }

  if (reply.scheduledAppointmentDate) {
    objToStringify.lastScheduledAppointmentDate = reply.scheduledAppointmentDate
  } else {
    objToStringify.lastScheduledAppointmentDate = scheduledAppointmentDate
  }

  if (reply.scheduledAppointmentTime) {
    objToStringify.lastScheduledAppointmentTime = reply.scheduledAppointmentTime
  } else {
    objToStringify.lastScheduledAppointmentTime = scheduledAppointmentTime
  }

  await client.set(`${user}-last-interaction`, JSON.stringify(objToStringify))

  const twiml = new twilio.twiml.MessagingResponse()
  twiml.message(reply.body)
  res.writeHead(200, { 'Content-Type': 'text/xml' })
  res.end(twiml.toString())
})

app.post("/message/receive-status", function (req, res) {
  res.status(200).end()
})

app.listen(3001, () => {
  console.info("🔥 server running in 3001")
})
