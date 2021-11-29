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

function deleteUser (_, { id }) {
  const i = users.findIndex(user => user.id === id)

  if (i < 0) return null

  const deleteUser = users.splice(i, 1)
  
  return deleteUser ? deleteUser[0] : null
}

module.exports = { newUser, deleteUser }