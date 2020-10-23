<template>
  <div class="p-5 bg-gray-200 border-gray-400 shadow-md mx-2 rounded-md" v-if="book">
    <div class="flex flex-row border-b-2 mb-5 ">
      <svg class="fill-current text-gray-500 inline-block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M0 0l20 10L0 20V0zm0 8l10 2-10 2V8z"/>
      </svg>
      <h3 class="text-font-semibold text-gray-700 text-lg ml-3">Book details</h3>
    </div>
    <div v-if="book != null" class="flex flex-col items-start">
      <p class="py-1">{{ book.name }}</p>
      <p class="py-1">{{ book.author.name }}</p>
      <div v-if="filteredBooks && filteredBooks.length" class="mt-10">
        <h3>Other books written by this author: </h3>
        <ul>
          <li v-for="book in filteredBooks" :key=book.id class="text-left">
            {{ book.name }}
          </li>
        </ul>
      </div>
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
  computed: {
    filteredBooks() {
      let self = this;
      return this.booksByAuthor.filter(el => el.id !== self.bookId);
    }
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
                    name,
                    id
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
                 name,
                 id
                }
              }`,
      // Reactive parameters
      variables() {
        console.log("This id: " + this.book.author.id);
        // Use vue reactive properties here
        return {
          authorId: this.book.author.id
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
