import { combineResolvers } from "graphql-resolvers";
import { isAuthenticated } from "./authorization";

export default {
  Query: {
    articles: async (parent, context, { models }) => {
      return await models.Article.findAll();
    },
    article: async (parent, { id }, { models }) => {
      return await models.Article.findByPk(id);
    }
  },

  Mutation: {
    createArticle: combineResolvers(
      isAuthenticated,
      async (parent, { head, body }, { models, me }) => {
        const article = await models.Article.create({
          head,
          body,
          userId: me.id
        });
        return article;
      }
    )
  },

  Article: {
    user: async (article, args, { loaders }) => {
      return loaders.user.load(article.userId);
    }
  }
};
