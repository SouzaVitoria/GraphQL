const users = [
  {
    id: 1,
    name: "Danilo Caraça",
    email: "danilo@teste.com",
    age: 30,
    profileId: 1,
    status: "BLOCKED"
  },
  {
    id: 2,
    name: "Leila Souza",
    email: "leila@teste.com",
    age: 42,
    profileId: 2,
    status: "ACTIVE"
  }
]

const profiles = [
  {
    id: 1,
    type: "Administrador"
  },
  {
    id: 2,
    type: "Comum"
  }
]

module.exports = { users, profiles }