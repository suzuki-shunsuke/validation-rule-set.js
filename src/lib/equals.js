import { equals as equals_ } from 'validator/lib/equals'

export const equals = (comparison, value) => equals_(value, comparison);
