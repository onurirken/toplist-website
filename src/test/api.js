import axios from "axios";

const API_URL = "http://localhost:8000/graphql";

export const signIn = async variables =>
  await axios.post(API_URL, {
    query: `
      mutation ($login: String!, $password: String!) {
        signIn(login: $login, password: $password) {
          token
        }
      }
    `,
    variables
  });

  export const getMessages = async () =>
  axios.post(API_URL, {
    query: `
      query {
        messages {
          edges {id text createdAt}
          pageInfo {hasNextPage endCursor}
        }
      }
    `
  });

export const deleteUser = async (variables, token) =>
  axios.post(
    API_URL,
    {
      query: `
        mutation ($id: ID!) {
          deleteUser(id: $id)
        }
      `,
      variables
    },
    {
      headers: {
        "x-token": token
      }
    }
  );

export const user = async variables =>
  axios.post(API_URL, {
    query: `
      query ($id: ID!) {
        user(id: $id) {
          id
          username
          email
          role
        }
      }
    `,
    variables
  });
