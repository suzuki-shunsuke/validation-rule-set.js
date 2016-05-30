import isFloat from 'validator/lib/isFloat'

function float(options, value) {
  return arguments.length === 1 ? isFloat(options) : isFloat(value, options);
}

module.exports = float;
