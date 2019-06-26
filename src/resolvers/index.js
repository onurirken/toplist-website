import userResolvers from "../resolvers/user";
import articleResolvers from "../resolvers/article";
import messageResolvers from "../resolvers/message";
import { GraphQLDateTime } from "graphql-iso-date";

const customScalarResolver = {
  Date: GraphQLDateTime
};

export default [
  customScalarResolver,
  userResolvers,
  messageResolvers,
  articleResolvers
];
