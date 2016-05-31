import isBefore from 'validator/lib/isBefore'

export function before(date, value) {
  return arguments.length === 1 ? isBefore(date) : isBefore(value, date);
}
