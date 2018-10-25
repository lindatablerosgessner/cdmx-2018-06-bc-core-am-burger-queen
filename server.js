const {
  ApolloServer,
  gql
} = require('apollo-server');
const mongoose = require("mongoose");

require("dotenv").config({
  path: "variables.env"
});
// import typeDefs.gql to be able to read it with filesystem
const fs = require("fs");
const path = require("path");

// here we require our model structure
const Extra = require("./models/Extra");
const Side = require("./models/Side");
const Drink = require("./models/Drink");
const Food = require("./models/Food");
const Order = require("./models/Order");
const User = require("./models/User");
const resolvers = require("./resolvers");

// with path module we join directory name and archive
const filePath = path.join(__dirname, 'typeDefs.gql');
// Then we tell it to read it
// Sync, because we only want to read it without promises and stuff
const typeDefs = fs.readFileSync(filePath, "utf-8")
// console.log(filePath);
// console.log(typeDefs);

// here we are connection the database URI with our app
mongoose.connect(
    process.env.MONGO_URI, {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("Connected with Database"))
  .catch((error) => console.log(error));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    console.log(req.headers["authorization"]);
    Extra,
    Side,
    Drink,
    Food,
    Order,
    User
  }
});

// { port: process.env.PORT || 4000 }

server.listen(5000).then(({
  url
}) => {
  console.log('IT WORKS', url);
}).catch((error) => {
  console.error;
});