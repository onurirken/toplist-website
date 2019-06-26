
export const createUsersWithMessages = async ({models, date}) => {
  await models.User.create(
    {
      username: "onur",
      email: "onur@onur.com",
      password: "onuronur",
      role: "ADMIN",
      messages: [
        {
          text: "Learn nodejs",
          createdAt: date.setSeconds(date.getSeconds() + 1)
        },
        {
          text: "Learn graphql",
          createdAt: date.setSeconds(date.getSeconds() + 1)
        }
      ]
    },
    {
      include: [models.Message]
    }
  );

  await models.User.create(
    {
      username: "ali",
      email: "ali@ali.com",
      password: "alialiali",
      messages: [
        {
          text: "Sit",
          createdAt: date.setSeconds(date.getSeconds() + 1)
        },
        {
          text: "Sleep",
          createdAt: date.setSeconds(date.getSeconds() + 1)
        }
      ]
    },
    {
      include: [models.Message]
    }
  );
};
