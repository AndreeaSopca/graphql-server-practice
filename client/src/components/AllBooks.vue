<template>
  <div class="hello">
    <ApolloQuery
        :query="require('../queries/books.js').default"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <h3 v-if="loading"> Loading </h3>
        <h3 v-if="error"> Oh No </h3>
        <div v-if="data != null && data.books.length">
          <div v-for="book in data.books" :key="book.id" @click="selected = book.id">
           {{book.name}} {{book.author.name}} {{book.author.id}}
          </div>
        </div>
        <div v-else class="empty">
          No Speakers match your search
        </div>
      </template>
    </ApolloQuery>
    <BookDetails :book-id="selected"/>
  </div>
</template>

<script>

import BookDetails from "@/components/BookDetails";

export default {
  name: 'AllBooks',
  components: {BookDetails},
  props: {
  },
  data() {
    return {
      selected: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
