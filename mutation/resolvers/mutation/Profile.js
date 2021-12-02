const { nextId, profiles } = require('../../data/db')

function indexProfile(filter) {
  if (!filter) return -1
  const { id, type } = filter

  console.log(id, type)

  if (id) {
    return profiles.findIndex(profile => profile.id == id)
  } else if (type) {
    return profiles.findIndex(profile => profile.type === type)
  }

  return -1
}


function newProfile(_, args) {

  const profileCreated = profiles.some(profile => profile.type === args.type)

  if (profileCreated) {
    throw new Error("Perfil já cadastrado")
  }

  const newProfile = {
    id: nextId(),
    type: args.type
  }

  profiles.push(newProfile)

  return newProfile
}

function deleteProfile(_, args) {
  const i = indexProfile(args)

  if (i < 0) return null

  const deleteUser = profiles.splice(i, 1)

  return deleteUser ? deleteUser[0] : null
}

module.exports = { newProfile, deleteProfile }