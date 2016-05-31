import isFQDN from 'validator/lib/isFQDN'

export function fqdn(options, value) {
  return arguments.length === 1 ? isFQDN(options) : isFQDN(value, options);
}
