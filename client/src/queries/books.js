import gql from 'graphql-tag';

export default gql`
    query books {
        books {
            id,
            name,
            author {
                name,
                id
            }
        }
    }
`
