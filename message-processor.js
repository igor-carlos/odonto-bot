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
  enterYourNumberForReschedule,
  enterYourHourForReschedule,
  enterYourDateForReschedule,
  enterYourNumberForFindPendingInstallmentInquiries,
  finishingOne,
  numberFailureReschedule,
  numberFailureSchedule,
  dateFailureReschedule,
  dateFailureSchedule,
  hourFailureSchedule,
  hourFailureReschedule,
  dentalPlans,
  firstInteractionFail
} from './constant-messages.js'
import { isValidCellNumber, isValidDate, isValidHour } from './helpers.js'

export function handleMessage(choice, lastTemplateId, scheduledAppointmentDate, scheduledAppointmentTime) {

  console.log('')
  console.log('lastTemplateId =>', lastTemplateId)
  console.log('choice =>', choice)
  console.log('')

  console.log('👽', scheduledAppointmentDate)
  console.log('👽', scheduledAppointmentTime)

  if (lastTemplateId === 1) {
    if (choice === 1) return servicesOffered
    if (choice === 2) return scheduleConsultation
    if (choice === 3) return enterYourNumberForReschedule
    if (choice === 4) return enterYourNumberForFindPendingInstallmentInquiries
    if (choice === 5) return requestAttest
    if (choice === 6) return dentalPlans
    if (choice === 7) return redirectToAttendant
    return firstInteractionFail
  }

  if (lastTemplateId === 2) {
    if (choice === 1) return scheduleConsultation
    if (choice === 2) return firstMessage()
    if (choice === 3) return redirectToAttendant
  }

  if (lastTemplateId === 3) {
    console.info(`O usuário escolheu a opção de consuta ${choice}`)
    return enterYourNumberForSchedule
  }

  if (lastTemplateId === 4) {
    console.info(`O número do usuário é ${choice}`)
    if (!isValidCellNumber(choice)) {
      return numberFailureSchedule
    }
    return enterYourDateForSchedule
  }

  if (lastTemplateId === 6) {
    if (choice === 1) return redirectToAttendant
    if (choice === 2) return finishingOne
  }

  if (lastTemplateId === 7) {
    if (choice === 1) return redirectToAttendant
    if (choice === 2) return firstMessage(false)
  }

  if (lastTemplateId === 9) {
    console.info(`A data escolhida pelo usuário é ${choice}`)
    if (!isValidDate(choice)) {
      return dateFailureSchedule
    }
    return enterYourHourForSchedule(choice)
  }

  if (lastTemplateId === 10) {
    console.info(`O horario escolhido pelo usuário foi ${choice}`)
    if (!isValidHour(choice)) {
      return hourFailureSchedule
    }
    return scheduleSuccess(choice)
  }

  if (lastTemplateId === 11) {
    if (choice === 1) {
      return finishingOne;
    }
    if (choice === 2) return redirectToAttendant
  }

  if (lastTemplateId === 12) {
    console.info(`O celular do usuário que quer remarcar uma consulta é ${choice}`)
    if (!isValidCellNumber(choice)) {
      return numberFailureReschedule
    }
    return enterYourDateForReschedule(scheduledAppointmentDate, scheduledAppointmentTime)
  }

  if (lastTemplateId === 13) {
    console.info(`A data que o usuário quer remarcar a consulta é para ${choice}`)
    if (!isValidDate(choice)) {
      return dateFailureReschedule
    }
    return enterYourHourForReschedule(choice)
  }

  if (lastTemplateId === 14) {
    console.info(`O horário que o usuário quer remarcar sua consulta é de ${choice}`)
    if (!isValidHour(choice)) {
      return hourFailureReschedule
    }
    return scheduleSuccess(choice)
  }

  if (lastTemplateId === 15) {
    console.info(`O número do usuário que quer consultar as contas pendentes é ${choice}`)
    return pendingInstallmentInquiries
  }

  if (lastTemplateId === 17) {
    if (!isValidCellNumber(choice)) {
      return numberFailureSchedule
    }
    return enterYourDateForSchedule
  }

  if (lastTemplateId === 18) {
    if (!isValidCellNumber(choice)) {
      return numberFailureReschedule
    }
    return enterYourDateForReschedule(scheduledAppointmentDate, scheduledAppointmentTime)
  }

  if (lastTemplateId === 19) {
    if (!isValidDate(choice)) {
      return dateFailureSchedule
    }
    return enterYourHourForSchedule(choice)
  }

  if (lastTemplateId === 20) {
    if (!isValidDate(choice)) {
      return dateFailureReschedule
    }
    return enterYourHourForReschedule
  }

  if (lastTemplateId === 21) {
    if (!isValidHour(choice)) {
      return hourFailureSchedule
    }
    return scheduleSuccess(choice)
  }

  if (lastTemplateId === 22) {
    if (!isValidHour(choice)) {
      return hourFailureReschedule
    }
    return scheduleSuccess(choice)
  }

  if (lastTemplateId === 23) {
    if (choice === 1) return firstMessage(false)
    if (choice === 2) return redirectToAttendant
  }

  return {
    templateId: 1,
    body: `lastTemplateId: ${lastTemplateId} // choice: ${choice} // ↩️ fluxo resetado`
  }
}
