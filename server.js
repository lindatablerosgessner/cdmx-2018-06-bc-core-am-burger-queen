const {ApolloServer, gql} = require('apollo-server');
const mongoose = require("mongoose");

require("dotenv").config({path: "variables.env"});
// import typeDefs.gql to be able to read it with filesystem
const fs = require("fs");
const path = require("path");

// here we require our model structure
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
    process.env.MONGO_URI,
    { useNewUrlParser: true
    }
  )
  .then(() => console.log("Connected with Database"))
  .catch((error) => console.log(error));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    Drink,
    Food,
    Order,
    User
  }
});

server.listen().then(({
  url
}) => {
  console.log('IT WORKS', url);
}).catch((error) => {
  console.error;
});