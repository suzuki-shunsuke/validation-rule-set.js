import isAlphanumeric from 'validator/lib/isAlphanumeric'

function alpha_numeric(locale, value) {
  return arguments.length === 1 ? isAlphanumeric(locale) : isAlphanumeric(value, locale);
}

module.exports = alpha_numeric;
