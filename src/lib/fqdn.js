import isFQDN from 'validator/lib/isFQDN'

function fqdn(options, value) {
  return arguments.length === 1 ? isFQDN(options) : isFQDN(value, options);
}

module.exports = fqdn;
