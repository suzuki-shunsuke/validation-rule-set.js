import contains from 'validator/lib/contains'

module.exports = (seed, value) => contains(value, seed);
