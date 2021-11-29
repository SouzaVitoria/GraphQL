const { users, nextId } = require('../data/db')

function newUser(_, args) {
  const newUser = {
    id: nextId(),
    ...args,
    profileId: 1,
    status: 'ACTIVE'
  }

  users.push(newUser)
  return newUser
}

module.exports = { newUser }