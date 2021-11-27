const { ApolloServer, gql } = require('apollo-server')

const users = [
  {
    id: 1,
    name: "Danilo Caraça",
    email: "danilo@teste.com",
    age: 30
  },
  {
    id: 2,
    name: "Leila Souza",
    email: "leila@teste.com",
    age: 42
  }
]

const typeDefs = gql`
  scalar Date

  type User {
    id: ID
    name: String!
    email: String!
    age: Int
    wage: Float
    vip: Boolean
  }

  type Product {
    name: String!
    price: Float!
    discount: Float
    discountPrice: Float
  }

  # Pontos de entrada da API
  type Query {
    ola: String!
    horaAtual: Date
    userLogado: User
    product: Product
    numbersMegaSena: [Int!]!  
    users: [User]!
    user(id: ID): User
  }
`

const resolvers = {
  User: {
    wage(currentObject) {
      return currentObject.currentWage
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
    }
  }
}

const server = new ApolloServer({
  typeDefs, resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})
