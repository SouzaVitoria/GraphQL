const { profiles } = require('../data/db')

module.exports = {
  wage(currentObject) {
    return currentObject.currentWage
  },

  profile(currentObject) {
    const selector = profiles.filter(profile => profile.id === currentObject.id)
    return selector ? selector[0] : "Not found current profile"
  }
}