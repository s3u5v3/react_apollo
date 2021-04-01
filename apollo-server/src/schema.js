// どのようなパラメータで叩かれるか? どのようなデータを返すかを定義
const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query{
    hello:String!
    users:[User]!
    books:[Book]!
  }
  type Mutation{
    createUser(name:String):User!
    createBook(name:String):Book!
    deleteBook(name:String):Book
  }
  type User{
    id:ID!
    name:String!
    createdAt:String
    updatedAt:String
  }
  type Book{
    id:ID!
    name:String!
    createdAt:String
    updatedAt:String
  }
`;

module.exports = typeDefs;
