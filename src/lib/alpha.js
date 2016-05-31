import isAlpha from 'validator/lib/isAlpha'

export function alpha(locale, value) {
  return arguments.length === 1 ? isAlpha(locale) : isAlpha(value, locale);
}
