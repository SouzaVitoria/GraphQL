const { users, nextId } = require('../data/db')

function indexUser(filter) {
 if(!filter) return -1
 const { id, email }= filter

 if(id) {
   return users.findIndex(user => user.id === id)
 } else if (email) {
   return users.findIndex(user => user.email === email)
 }

 return -1
}

function newUser(_, { data }) {
  const emailCreated = users.some(user => user.email === data.email)

  if (emailCreated) {
    throw new Error("E-mail cadastrado")
  }

  const newUser = {
    id: nextId(),
    ...data,
    profileId: 1,
    status: 'ACTIVE'
  }

  users.push(newUser)
  return newUser
}

function deleteUser (_, { filter }) {
  const i = indexUser(filter)

  if (i < 0) return null

  const deleteUser = users.splice(i, 1)
  
  return deleteUser ? deleteUser[0] : null
}

function updateUser(_, { filter, data }) {
  const i = indexUser(filter)

  if (i < 0) return null

  const user = {
    ...users[i],
    ...data
  }

  users.splice(i, 1, user)
  
  return user
}

module.exports = { newUser, deleteUser, updateUser }