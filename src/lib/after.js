import isAfter from 'validator/lib/isAfter'

function after(date, value) {
  return arguments.length === 1 ? isAfter(date) : isAfter(value, date);
}

module.exports = after;
