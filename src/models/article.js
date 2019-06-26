const article = (sequelize, DataTypes) => {
  const Article = sequelize.define("article", {
    head: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "head shouldn't be empty"
        }
      }
    },
    body: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "body shouldn't be empty"
        }
      }
    }
  });

  Article.associate = models => {
    Article.belongsTo(models.User);
  };

  return Article;
};

export default article;
