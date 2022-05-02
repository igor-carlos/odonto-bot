import {
  servicesOffered,
  scheduleConsultation,
  enterYourNumber,
  pendingInstallmentInquiries,
  requestAttest,
  redirectToAttendant
} from './constant-messages.js'

export function handleMessage(choice, lastTemplateId) {
  console.log('🔵 lastTemplateId =>', lastTemplateId)
  console.log('🟠 choice =>', choice)

  if (lastTemplateId === 1) {
    if (choice === 1) return servicesOffered
    if (choice === 2) return scheduleConsultation
    if (choice === 3) return enterYourNumber
    if (choice === 4) return pendingInstallmentInquiries
    if (choice === 5) return requestAttest
    if (choice === 6) return redirectToAttendant
  }

  if (lastTemplateId === 2) {
    if (choice === 1) return scheduleConsultation
  }

  if (lastTemplateId === 3) {
    console.log("🌹 choice =>", choice)
  }

  throw new Error('flow error')
}
