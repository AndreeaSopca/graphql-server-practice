import gql from 'graphql-tag';

export default gql`
    mutation addBook($name: String!, $author: ID!) {
        addBook(name: $name, author: $author) {
            id
            name
            author {
                id 
                name
            }
        }
    }
`