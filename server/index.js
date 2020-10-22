const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql')
const schema = require('./schema');

const cors = require('cors');

// // Construct a schema, using GraphQL schema language
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);
//
// // The root provides a resolver function for each API endpoint
// const root = {
//     hello: () => {
//         return 'Hello world!';
//     },
// };

const app = express();
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
