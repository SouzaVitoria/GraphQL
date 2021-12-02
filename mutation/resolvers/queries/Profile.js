const { profiles } = require('../../data/db')

module.exports = {
  profiles() {
    return profiles
  },

  profile(_, { id }) {
    const selectors = profiles.filter(profile => profile.id === id)
    return selectors ? selectors[0] : "Not found current profile"
  }
}