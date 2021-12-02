const { users } = require('../../data/db')

module.exports = {
  users() {
    return users
  },

  user(_, args) {
    const selectors = users.filter(user => user.id == args.id)
    return selectors ? selectors[0] : 'Not found'
  }
}