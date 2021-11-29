const { users, nextId } = require('../data/db')

function newUser(_, args) {
  const emailCreated = users.some(user => user.email === args.email)

  if (emailCreated) {
    throw new Error("E-mail cadastrado")
  }

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