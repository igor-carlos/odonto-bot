import {
  firstMessage,
  servicesOffered,
  scheduleConsultation,
  enterYourNumberForSchedule,
  pendingInstallmentInquiries,
  requestAttest,
  redirectToAttendant,
  enterYourDateForSchedule,
  enterYourHourForSchedule,
  scheduleSuccess,
  enterYourHourForReschedule,
  enterYourDateForReschedule,
  enterYourNumberForFindPendingInstallmentInquiries
} from './constant-messages.js'

export function handleMessage(choice, lastTemplateId) {
  console.log('🔵 lastTemplateId =>', lastTemplateId)
  console.log('🟠 choice =>', choice)

  if (lastTemplateId === 1) {
    if (choice === 1) return servicesOffered
    if (choice === 2) return scheduleConsultation
    if (choice === 3) return enterYourNumberForReschedule
    if (choice === 4) return enterYourNumberForFindPendingInstallmentInquiries
    if (choice === 5) return requestAttest
    if (choice === 6) return redirectToAttendant
  }

  if (lastTemplateId === 2) {
    if (choice === 1) return scheduleConsultation
    if (choice === 2) return firstMessage()
    if (choice === 3) return redirectToAttendant
  }

  if (lastTemplateId === 3) {
    console.log(`O usuário escolheu a opção de consuta ${choice}`)
    return enterYourNumberForSchedule
  }

  if (lastTemplateId === 4) {
    console.log(`O número do usuário é ${choice}`)
    return enterYourDateForSchedule
  }

  if (lastTemplateId === 6) {
    if (choice === 1) return redirectToAttendant
    if (choice === 2) return firstMessage(false)
  }

  if (lastTemplateId === 7) {
    if (choice === 1) return redirectToAttendant
    if (choice === 2) return firstMessage(false)
  }

  if (lastTemplateId === 9) {
    console.log(`A data escolhida pelo usuário é ${choice}`)
    return enterYourHourForSchedule
  }

  if (lastTemplateId === 10) {
    console.log(`O horario escolhido pelo usuário foi ${choice}`)
    return scheduleSuccess
  }

  if (lastTemplateId === 11) {
    if (choice === 1) {
      console.log("resetar mensagens")
      return firstMessage;
    }
    if (choice === 2) return redirectToAttendant
  }

  if (lastTemplateId === 12) {
    console.log(`O celular do usuário que quer remarcar uma consulta é ${choice}`)
    return enterYourDateForReschedule
  }

  if (lastTemplateId === 13) {
    console.log(`A data que o usuário quer remarcar a consulta é para ${choice}`)
    return enterYourHourForReschedule
  }

  if (lastTemplateId === 14) {
    console.log(`O horário que o usuário quer remarcar sua consulta é de ${choice}`)
    return scheduleSuccess
  }

  if (lastTemplateId === 15) {
    console.log(`O número do usuário que quer consultar as contas pendentes é ${choice}`)
    return pendingInstallmentInquiries
  }

  throw new Error('flow error')
}
