import isByteLength from 'validator/lib/isByteLength'

export function byte_length(options, value) {
  return arguments.length === 1 ? isByteLength(options) : isByteLength(value, options);
}
