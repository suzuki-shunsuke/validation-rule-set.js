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

export const rule_set = {
  after: after,
  bool: bool,
  ascii: isAscii,
  base64: isBase64,
  boolean: isBoolean,
  credit_card: isCreditCard,
};
