import isEmail from 'validator/lib/isEmail'

export function email(options, value) {
  return arguments.length === 1 ? isEmail(options) : isEmail(value, options);
}
