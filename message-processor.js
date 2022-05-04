import {
  firstMessage,
  servicesOffered,
  scheduleConsultation,
  enterYourNumber,
  pendingInstallmentInquiries,
  requestAttest,
  redirectToAttendant,
  enterYourDate,
  enterYourHour
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
    if (choice === 2) return firstMessage()
    if (choice === 3) return redirectToAttendant
  }

  if (lastTemplateId === 3) {
    console.log(`O usuário escolheu a opção ${choice}`)
    return enterYourNumber
  }

  if (lastTemplateId === 4) {
    console.log(`O número do usuário é ${choice}`)
    return enterYourDate
  }

  if (lastTemplateId === 9) {
    console.log(`A data escolhida pelo usuário é ${choice}`)
    return enterYourHour
  }

  if (lastTemplateId === 11) {
    if (choice === 1) {
      console.log("resetar mensagens")
      return firstMessage;
    }
    if (choice === 2) return redirectToAttendant
  }

  throw new Error('flow error')
}
