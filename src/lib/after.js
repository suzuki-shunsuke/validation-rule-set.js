import isAfter from 'validator/lib/isAfter'

export default function after(date, value) {
  return arguments.length === 1 ? isAfter(date) : isAfter(value, date);
}
