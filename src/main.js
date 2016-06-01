/*
import isAscii from 'validator/lib/isAscii'
import isBase64 from 'validator/lib/isBase64'
import isBoolean from 'validator/lib/isBoolean'
import isCreditCard from 'validator/lib/isCreditCard'
import after from './lib/after.js'
import alpha from './lib/alpha.js'
import alpha_numeric from './lib/alpha_numeric.js'
import before from './lib/before.js'
import bool from './lib/bool.js'
import byte_length from './lib/byte_length.js'
import contains from './lib/contains.js'
import currency from './lib/currency.js'
import divisible from './lib/divisible.js'
import email from './lib/email.js'
import equals from './lib/equals.js'
import float from './lib/float.js'
import fqdn from './lib/fqdn.js'
import ip from './lib/ip.js'
*/

import { validator } from 'validator';

export function after(date, value) {
  return arguments.length === 1 ? validator.isAfter(date) : validator.isAfter(value, date);
}

export function alpha(locale, value) {
  return arguments.length === 1 ? validator.isAlpha(locale) : validator.isAlpha(value, locale);
}

export function alpha_numeric(locale, value) {
  return arguments.length === 1 ? validator.isAlphanumeric(locale) : validator.isAlphanumeric(value, locale);
}

export function ascii(value) { return validator.isAscii(value); }

export function base64(value) { return validator.isBase64(value); }

export function before(date, value) {
  return arguments.length === 1 ? validator.isBefore(date) : validator.isBefore(value, date);
}

export function bool(value) { return validator.isBoolean(value); }

export function byte_length(options, value) {
  return arguments.length === 1 ? validator.isByteLength(options) : validator.isByteLength(value, options);
}

export function contains(seed, value) { return validator.contains(value, seed); }

export function credit_card(value) { return validator.isCreditCard(value); }

export function currency(options, value) {
  return arguments.length === 1 ? validator.isCurrency(options) : validator.isCurrency(value, options);
}

export function data_uri(value) { return validator.isDataURI(value); }

export function date(value) { return validator.isDate(value); }

export function decimal(value) { return validator.isDecimal(value); }

export function divisible(number, value) {
  return arguments.length === 1 ? validator.isDivisibleBy(number) : validator.isDivisibleBy(value, number);
}

export function email(options, value) {
  return arguments.length === 1 ? validator.isEmail(options) : validator.isEmail(value, options);
}

export function equals(comparison, value) { return validator.equals(value, comparison); }

export function float(options, value) {
  return arguments.length === 1 ? validator.isFloat(options) : validator.isFloat(value, options);
}

export function fqdn(options, value) {
  return arguments.length === 1 ? validator.isFQDN(options) : validator.isFQDN(value, options);
}

export function full_width(value) { return validator.isFullWidth(value); }

export function half_width(value) { return validator.isHalfWidth(value); }

export function ip(version, value) {
  return arguments.length === 1 ? validator.isIP(version) : validator.isIP(value, version);
}
