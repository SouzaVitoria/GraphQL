const { nextId, profiles } = require('../../data/db')

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

module.exports = { newProfile }