const graphql = require("graphql");
const {GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLSchema,
    GraphQLInt,
    GraphQLList
} = graphql;
const _ = require("lodash");

const books = [
    {name: 'book1', id: '1', author: '1'},
    {name: 'book2', id: '2', author: '2'},
    {name: 'book3', id: '3', author: '3'},
    {name: 'book3.1', id: '4', author: '3'},
    {name: 'book3.2', id: '5', author: '3'}
]
const authors = [
    {name: 'author1', age: 23, id: '1'},
    {name: 'author2', age: 35, id: '2'},
    {name: 'author3', age: 46, id: '3'},
 ]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => (
        {
            id: {type: GraphQLID},
            name: {type: GraphQLString},
            author: {
                type: AuthorType,
                resolve(parent, args){
                    return _.find(authors, {id: parent.author})
                }
            }
        }
    )
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => (
        {
            id: {type: GraphQLID},
            name: {type: GraphQLString},
            age: {type: GraphQLInt},
            books: {
                type: new GraphQLList(BookType),
                resolve(parent, args){
                    return _.filter(books, {author: parent.id})
                }
            }
        }
    )
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                console.log(args)
                // get data from db
                return _.find(books, {id: args.id})
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                console.log(args)
                // get data from db
                return _.find(authors, {id: args.id})
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return books;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                return authors;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})