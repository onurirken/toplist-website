import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    articles: [Article!]!
    article(id: ID!): Article!
  }

  extend type Mutation {
    createArticle(head: String!, body: String!): Article!
  }

  type Article {
    id: ID!
    head: String!
    body: String!
    user: User!
  }
`;
