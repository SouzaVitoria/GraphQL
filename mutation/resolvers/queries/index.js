const { profile } = require('./Profile')
const { user } = require('./User')

module.exports = { ...user, ...profile}