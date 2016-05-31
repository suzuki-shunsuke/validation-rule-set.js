import isDivisibleBy from 'validator/lib/isDivisibleBy'

export function divisible(number, value) {
  return arguments.length === 1 ? isDivisibleBy(number) : isDivisibleBy(value, number);
}
