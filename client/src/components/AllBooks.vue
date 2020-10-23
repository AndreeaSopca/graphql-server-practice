<template>
  <div class="flex flex-wrap">
    <div class="w-1/2 h-56 overflow-y-scroll border border-gray-400 shadow-md p-2 rounded-md">
      <ApolloQuery
          :query="require('../queries/books.js').default"
      >
        <template slot-scope="{ result: { loading, error, data } }">
          <h3 v-if="loading"> Loading </h3>
          <h3 v-if="error"> Oh No </h3>
          <div v-if="data != null && data.books.length">
            <div v-for="book in data.books" :key="book.id" @click="selected = book.id"
                 class="p-1 tracking-wider font-semibold text-lg text-indigo-800 hover:underline hover:text-orange-900">
              <a href="#">{{book.name}}
              </a>
            </div>
          </div>
          <div v-else class="empty">
            No Speakers match your search
          </div>
        </template>
      </ApolloQuery>
    </div>
    <div class="w-1/2 h-56">
      <BookDetails :book-id="selected"/>
    </div>
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
