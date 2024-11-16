const { gql } = require("apollo-server-express");

module.exports = gql`
  type Employee {
    id: ID!
    name: String!
    email: String!
    age: Int!
    class: String
    subjects: [String]
    attendance: Int
  }

  type Query {
    employees(page: Int, limit: Int, sortBy: String): [Employee]
    employee(id: ID!): Employee
  }

  type Mutation {
    addEmployee(
      name: String!
      email: String!
      age: Int!
      class: String
      subjects: [String]
      attendance: Int!
      age: Int
      class: String
      subjects: [String]
    ): Employee
  }
  type Mutation {
    updateEmployee(
      id: ID
      name: String!
      age: Int!
      class: String
      subjects: [String]
      attendance: Int
      age: Int
      class: String
      subjects: [String]
    ): Employee
  }

  type AuthPayload {
    token: String
    user: User
  }

  type User {
    id: ID!
    email: String!
    role: String!
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
    register(email: String!, password: String!, role: String!): User
  }
`;
