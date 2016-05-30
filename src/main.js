import validator from 'validator'
import isAscii from 'validator/lib/isAscii'
import isBase64 from 'validator/lib/isBase64'
import isBoolean from 'validator/lib/isBoolean'
import isCreditCard from 'validator/lib/isCreditCard'

module.exports = {
  after: require('./lib/after.js'),
  alpha: require('./lib/alpha.js'),
  alpha_numeric: require('./lib/alpha_numeric.js'),
  before: require('./lib/before.js'),
  byte_length: require('./lib/byte_length.js'),
  contains: require('./lib/contains.js'),
  currency: require('./lib/currency.js'),
  divible: require('./lib/divisible.js'),
  email: require('./lib/email.js'),
  equals: require('./lib/equals.js'),
  float: require('./lib/float.js'),
  fqdn: require('./lib/fqdn.js'),
  ip: require('./lib/ip.js'),

  ascii: isAscii,
  base64: isBase64,
  boolean: isBoolean,
  credit_card: isCreditCard,
};
