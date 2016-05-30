import isEmail from 'validator/lib/isEmail'

function email(options, value) {
  return arguments.length === 1 ? isEmail(options) : isEmail(value, options);
}

module.exports = email;
