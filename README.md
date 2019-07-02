# toplist-website

##### Node.js / Graphql / Apollo / Postgres / Sequilize / JWT / Auth / Mocha & Chai

deneme url = https://toplist-website.herokuapp.com/graphql

### .env example

````
SECRET=wr3r2s4zwefw..wself.2456342.dawqdq
DATABASE=toplist
DATABASE_USER=onurirken
DATABASE_PASSWORD=onurirken
PORT=8000
````
### Query examples

````
mutation {
  signUp(username:"ali demir", email:"alidemir@mail.com", password:"alidemir") {token}
}
````
 response içinde dönen token altta bulunan http headers ekle 
 => "x-token": "your_token"
````
mutation {
  createMessage(text: "Hello World") {
    id
    text
  }
}

````
````
query {
  messages {
    edges {
      id
      text
      user {
        id
        username
        email
        role
      }
      createdAt
    }
  }
}
````
 

