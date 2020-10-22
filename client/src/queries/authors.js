import gql from 'graphql-tag';

export default gql`
    query authors {
        authors {
            id
            name
            age
        }
    }
`