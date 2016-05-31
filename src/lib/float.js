import isFloat from 'validator/lib/isFloat'

export function float(options, value) {
  return arguments.length === 1 ? isFloat(options) : isFloat(value, options);
}
