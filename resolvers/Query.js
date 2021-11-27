const { users, profiles } = require('../data/db')

module.exports = {
  ola() {
    return 'Apenas retorna uma string'
  },

  horaAtual() {
    return new Date()
  },

  userLogado() {
    return {
      id: 1,
      name: 'Vitória Souza',
      email: 'vitoria@teste.com',
      age: 21,
      currentWage: 1234.56,
      vip: true
    }
  },

  product() {
    return {
      name: 'Smartphone',
      price: 6543.21,
      discount: 543.21
    }
  },

  numbersMegaSena() {
    // return [4, 8, 13, 27, 33, 54]
    const crescent = (a, b) => a - b
    return Array(6).fill(0).map(() => parseInt(Math.random() * 60)).sort(crescent)
  },

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