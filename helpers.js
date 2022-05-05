export function isValidCellNumber(number) {
  return (number.length >= 10 && number.length <= 11)
}

export function isValidDate(date) {
  return (date[2] === '/' && date[5] === '/')
}

export function isValidHour(hour) {
  return (hour[2] === ':')
}
