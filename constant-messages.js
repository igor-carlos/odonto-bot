export const firstMessage = (needGreetings) => {
  let greeting
  if (needGreetings === undefined || needGreetings === null) {
    const hours = new Date().getHours()
    if (hours < 12) greeting = "Olá, bom dia, é um prazer falar com você! "
    if (hours >= 12 && hours <= 18) greeting = "Olá, boa tarde, é um prazer falar com você! "
    if (hours > 18) greeting = "Olá, boa noite, é um prazer falar com você! "
  }
  return {
    templateId: 1,
    body: `
  ${greeting ? greeting : ''}Escolha uma das opções abaixo:
    1.Serviços oferecidos
    2.Agendar uma consulta
    3.Reagendar uma consulta
    4.Consulta de parcelas pendentes 
    5.Solicitar atestado
    6.Desejo falar diretamente com uma atendente`
  }
}

export const servicesOffered = {
  templateId: 2,
  body: `
Atualmente em nosso consultório trabalhamos com:
  Clareamento dos dentes
  Prótese dentária
  Aparelhos

Ficou interessado em algum serviço ? Deseja marcar uma consulta ?
  1. Sim
  2. Não, quero voltar ao menu anterior
  3. Não, desejo algo mais específico, quero falar com a atendente`
}

export const scheduleConsultation = {
  templateId: 3,
  body: `
Para qual serviço você deseja marcar uma consulta ?
  1. Clareamento dos dentes
  2. Prótese dentária
  3. Aparelhos`
}

export const enterYourNumberForSchedule = {
  templateId: 4,
  body: `Estamos quase lá, agora me informe seu celular com ddd e sem pontuações como o exemplo a seguir: 35943211234`
}

export const findLastConsultation = {
  templateId: 5,
  body: `Te achei aqui e vi que você tem uma consulta marcada para o dia 20/07/2022, informe a data que deseja remarcar como o exemplo a seguir: 10/03/2021`
}

export const pendingInstallmentInquiries = {
  templateId: 6,
  body: `
Verifiquei aqui que você tem 2 pendências, deseja falar com a atendente para mais detalhes ?
  1. Sim
  2. Não obrigado, era só isso (finalizar conversa)`
}

export const requestAttest = {
  templateId: 7,
  body: `
Não encontrei nenhum atestado em meu ficheiro, posso te passar para a atendente ?
  1. Sim
  2. Não, desejo voltar ao menu anterior`
}

export const redirectToAttendant = {
  templateId: 8,
  body: `Aguarde um momento, vou chamar uma atendente para você :D`
}

export const enterYourDateForSchedule = {
  templateId: 9,
  body: `Informe a data em que você quer marcar sua consulta, ex: 04/10/2022`
}

export const enterYourHourForSchedule = {
  templateId: 10,
  body: `Informe o horário que deseja realizar sua consulta, ex: 10:30`
}

export const scheduleSuccess = {
  templateId: 11,
  body: `Tudo certo!, irei repassar essas infomações para o consultório e logo mais confirmarei sua consulta, qualquer dúvida estou a disposição.
    1. Ok, entendido (finalizar conversa)
    2. Não entendi muito bem, quero falar com a atendente`
}

export const enterYourNumberForReschedule = {
  templateId: 12,
  body: `Me informe seu celular com ddd e sem pontuações como o exemplo a seguir: 35943211234`
}

export const enterYourDateForReschedule = {
  templateId: 13,
  body: `Informe a data em que você quer marcar sua consulta, ex: 04/10/2022`
}

export const enterYourHourForReschedule = {
  templateId: 14,
  body: `Informe o horário que deseja realizar sua consulta, ex: 10:30`
}

export const enterYourNumberForFindPendingInstallmentInquiries = {
  templateId: 15,
  body: `Me informe seu celular com ddd e sem pontuações como o exemplo a seguir: 35943211234`
}

export const finishingOne = {
  templateId: 16,
  body: "👋 Até logo !"
}

export const numberFailureSchedule = {
  templateId: 17,
  body: `Não consegui entender o número no seu celular, digite-o novamente, sem pontuações e sem espaços. Por exemplo: 35912345678`
}

export const numberFailureReschedule = {
  templateId: 18,
  body: `Não consegui entender o número no seu celular, digite-o novamente, sem pontuações e sem espaços. Por exemplo: 35912345678`
}

export const dateFailureSchedule = {
  templateId: 19,
  body: 'Não consegui entender a data digitada, digite-o novamente, separadas por "/". Por exemplo 10/08/2022'
}

export const dateFailureReschedule = {
  templateId: 20,
  body: 'Não consegui entender a data digitada, digite-o novamente, separadas por "/". Por exemplo 10/08/2022'
}

export const hourFailureSchedule = {
  templateId: 21,
  body: 'Não consegui entender o horário que você digitou, digite-o novamente separado com ":". Por exemplo: 16:30'
}

export const hourFailureReschedule = {
  templateId: 22,
  body: 'Não consegui entender o horário que você digitou, digite-o novamente separado com ":". Por exemplo: 16:30'
}
