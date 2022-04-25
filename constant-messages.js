export const firstMessage = () => {
  const hours = new Date().getHours()
  let greeting
  if (hours < 12) {
    greeting = "bom dia"
  } else if (hours >= 12 && hours <= 18) {
    greeting = "boa tarde"
  } else {
    greeting = "boa noite"
  }
  return {
    templateId: 1,
    body: `
  Olá, ${greeting}, é um prazer falar com você! Escolha uma das opções abaixo:
    1.Serviços oferecidos
    2.Agendar uma consulta
    3.Reagendar uma consulta
    4.Consulta de parcelas pendentes 
    5.Solicitar atestado
    6.Outros (falar com atendente)`
  }
}

export const servicesOffered = {
  templateId: 2,
  body: `
Atualmente em nosso consultório trabalhamos com:
  Clareamento dos dentes
  Prótese dentária
  Aparelhos

Ficou interessado em algum serviço ?
  0. Voltar
  1. Sim
  2. Não
  3. Não, quero falar com a atendente
  `
}