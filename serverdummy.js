// Here we are going to call apollo
const {ApolloServer, gql} = require ('apollo-server');

// now we have to pass this structure to GraphQL
// The name of the model must iniciate with Capital letter
// don't put a comma in the model!!!
// typeDefs only defines the structure of the models
// without executing them
const typeDefs = gql`
type List {
  fruit: String
  color: String
}
type Query{
  getList: [List]
}
type Mutation{
  addList(fruit: String, color:String): List
}
`;
// Put List in Array parenthesis of Array, because it's an array


const resolvers = {
  Query: {
    getList: () => {
      return list;
    }
  },
  Mutation:{
    addList: (_,args) => {
      const newList =  {
        // fruit and color already is defined and args.fruit and 
        // args.color are the values we are gonna receive
        fruit: args.fruit,
        color: args.color
      }
      //now we need to push the new stuff to the existing array and return it
      list.push(newList);
      return newList;
    }
  }
}

// To create server
// If your variable had an other name, you would have to put typeDefs:othername
// Here the server will read the definition of how
// we want the data and call the data with resolvers
const server = new ApolloServer({typeDefs, resolvers});

// create fake data
const list = [
  {fruit: "banana", color: "yellow"},
  {fruit: "apple", color: "red"},
  {fruit: "kiwi", color: "green"},
  {fruit: "bluberry", color: "blue"},
];

// Here we rise the server
server.listen().then(({url}) => {
  console.log('IT WORKS', url);
}).catch((error) => {
  console.error;
});