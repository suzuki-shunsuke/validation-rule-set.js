import isCurrency from 'validator/lib/isCurrency'

function currency(options, value) {
  return arguments.length === 1 ? isCurrency(options) : isCurrency(value, options);
}

module.exports = currency;
