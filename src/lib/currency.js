import isCurrency from 'validator/lib/isCurrency'

export function currency(options, value) {
  return arguments.length === 1 ? isCurrency(options) : isCurrency(value, options);
}
