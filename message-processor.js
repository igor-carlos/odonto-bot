import {
  servicesOffered
} from './constant-messages.js'

export function handleMessage(choice, lastTemplateId) {
  console.log('choice =>', typeof choice)

  if (lastTemplateId === 0) {
    console.log('entrou aq')
    if (choice === '1') {
      return servicesOffered
    }
  }

  if (lastTemplateId === 2) {

  }

  throw new Error('flow error')
}
