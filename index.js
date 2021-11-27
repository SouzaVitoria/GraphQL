const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')

const users = [
  {
    id: 1,
    name: "Danilo Caraça",
    email: "danilo@teste.com",
    age: 30,
    profileId: 1
  },
  {
    id: 2,
    name: "Leila Souza",
    email: "leila@teste.com",
    age: 42,
    profileId: 2
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

const resolvers = {
  User: {
    wage(currentObject) {
      return currentObject.currentWage
    },
    profile(currentObject) {
      const selector = profiles.filter(profile => profile.id === currentObject.id)
      return selector ? selector[0] : "Not found current profile"
    }
  },

  Product: {
    discountPrice(currentObject) {
      if (currentObject.discount) {
        return currentObject.price - currentObject.discount
      }
      return currentObject.price
    }
  },

  Query: {
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
}

const server = new ApolloServer({
  typeDefs: importSchema('./schema/index.graphql'), resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})
