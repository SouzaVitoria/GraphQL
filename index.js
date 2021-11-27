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

  # Pontos de entrada da API
  type Query {
    ola: String!
    horaAtual: Date
    userLogado: User
  }
`

const resolvers = {
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
        wage: 1234.56,
        vip: true
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