const { ApolloServer, gql } = require('apollo-server');

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
    discount_price: Float
  }

  # Pontos de entrada da API
  type Query {
    ola: String!
    horaAtual: Date
    userLogado: User
    product: Product
  }
`

const resolvers = {
  User: {
    wage(current_object) {
      return current_object.current_wage
    }
  },

  Product: {
    discount_price(current_object) {
      if (current_object.discount) {
        return current_object.price - current_object.discount
      }
      return current_object.price
    }
  },

  Query: {
    ola() {
      return "Apenas retorna uma string"
    },
    horaAtual() {
      return new Date
    },
    userLogado() {
      return {
        id: 1,
        name: "Vitória Souza",
        email: "vitoria@teste.com",
        age: 21,
        current_wage: 1234.56,
        vip: true
      }
    },
    product() {
      return {
        name: "Smartphone",
        price: 6543.21,
        discount: 543.21
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs, resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})