<template>
  <div class="hello">
    <h3>Book details {{ bookId }}</h3>
    <div v-if="book != null">
      <p>{{ book.name }}</p>
      <p>{{ book.author.name }}</p>
      <h3>Other books written b this author: </h3>
      <ul v-if="booksByAuthor != null">
        <li v-for="book in booksByAuthor" :key=book.id>
          {{ book.name }}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>

import gql from 'graphql-tag';

export default {
  name: 'BookDetails',
  props: {
    bookId: String,
  },
  data() {
    return {}
  },
  // Apollo-specific options
  apollo: {
    // Query with parameters
    book: {
      // gql query
      query: gql`query book($id: ID!) {
              book(id: $id){
              name,
                 author {
                    name
                    }
              }
              }`,
      // Reactive parameters
      variables() {
        // Use vue reactive properties here
        return {
          id: this.bookId
        }
      }
    },
    booksByAuthor: {
      // gql query
      query: gql`query booksByAuthor($authorId: ID!){
              booksByAuthor(authorId: $authorId){
                 name
                }
              }`,
      // Reactive parameters
      variables() {
        console.log("This id: " + this.book.author.id);
        // Use vue reactive properties here
        return {
          authorId: '3'
        }
      }
    },
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
