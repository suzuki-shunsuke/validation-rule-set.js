import isIP from 'validator/lib/isIP'

export function ip(version, value) {
  return arguments.length === 1 ? isIP(version) : isIP(value, version);
}
