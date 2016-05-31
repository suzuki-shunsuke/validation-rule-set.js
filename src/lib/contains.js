import { contains as contains_ } from 'validator/lib/contains'

export const contains = (seed, value) => contains_(value, seed);
