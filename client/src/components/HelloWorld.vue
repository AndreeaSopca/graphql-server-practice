<template>
  <div class="hello">
    <ApolloQuery
        :query="require('../queries/books.js').default"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <h3 v-if="loading"> Loading </h3>
        <h3 v-if="error"> Oh No </h3>
        <div v-if="data != null && data.books.length">
          <div v-for="book in data.books" :key="book.id">
           {{book.name}} {{book.author.name}} {{book.author.id}}
          </div>
        </div>
        <div v-else class="empty">
          No Speakers match your search
        </div>
      </template>
    </ApolloQuery>
    <BookForm/>
  </div>
</template>

<script>
import BookForm from "@/components/BookForm";

export default {
  name: 'HelloWorld',
  components: {BookForm},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
