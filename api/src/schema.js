const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
  }

  input PetInput {
    name: String
    type: String
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(input: PetInput): Pet
  }

  input NewPetInput {
    name: String!
    type: String!
  }

  type Mutation {
    newPet(input: NewPetInput!): Pet!
  }
`

module.exports = typeDefs
