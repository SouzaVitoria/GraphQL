const { users, profiles } = require('../data/db')

module.exports = {
  users() {
    return users
  },

  user(_, args) {
    const selectors = users.filter(user => user.id == args.id)
    return selectors ? selectors[0] : 'Not found'
  },

  profiles() {
    return profiles
  },

  profile(_, { id }) {
    const selectors = profiles.filter(profile => profile.id === id)
    return selectors ? selectors[0] : "Not found current profile"
  }
}