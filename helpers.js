export function isValidCellNumber(number) {
  return (number.length >= 10 && number.length <= 11)
}

export function isValidDate(date) {
  return (date[2] === '/' && date[5] === '/')
}

export function isValidHour(hour) {
  return (hour[2] === ':')
}

export function getNextWeekDate() {
  const now = new Date()
  now.setDate(now.getDate() + 7)
  return now.toLocaleDateString('pt-br')
}
