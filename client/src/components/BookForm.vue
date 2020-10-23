<template>
  <div class="mt-20 w-full md:w-1/2 border border-gray-400 shadow-xl rounded-md">
    <h3 class="font-bold tracking-wide text-xl text-gray-700 uppercase  border-b-2 my-5">Add a book</h3>
    <ApolloMutation
        :mutation="query"
        :variables="{
        name,
        author: author
        }"
        :update="update"
        @done="onDone"
    >
      <template v-slot="{ mutate, loading, error }">
        <p v-if="error">An error occurred: {{ error }}</p>
        <input type="text" v-model="name" class="w-1/2 border border-gray-600 bg-gray-200 tw-border-2 p-3 text-grey-800"
        placeholder="Book name"/>
        <ApolloQuery
            :query="authorsQuery"
        >
          <template slot-scope="{ result: { loading, error, data } }">
            <h3 v-if="loading"> Loading </h3>
            <h3 v-if="error"> Oh No </h3>
            <div v-if="data != null && data.authors.length">
              <select v-model="author" class="w-1/2 border border-gray-600 bg-gray-200 tw-border-2 p-3 text-grey-800 mt-2">
                <option disabled value="">Please select one</option>
                <option v-for="option in data.authors" :key="option.id" v-bind:value="option.id">
                  {{ option.name }}
                </option>
              </select>
            </div>
          </template>
        </ApolloQuery>
        <button @click="mutate()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">Add book</button>
      </template>
    </ApolloMutation>
  </div>
</template>


<script>

import addBook from "@/queries/addBook";
import booksQuery from "@/queries/books";
import authorsQuery from "@/queries/authors";

export default {
  name: 'BookForm',
  props: {
    msg: String
  },
  data() {
    return {
      name: null,
      author: '',
      query: addBook,
      authorsQuery: authorsQuery
    }
  },
  apollo: {},
  methods: {
    onDone() {
      this.name = null;
      this.author = null
    },
    update(store, {data: {addBook}}) {
      const query = {query: booksQuery}
      // Read the data from our cache for this query.
      const {books} = store.readQuery(query)
      // Add our book from the mutation to the end
      // Write our data back to the cache.
      store.writeQuery({
        ...query,
        data: {
          books: books.concat({
            ...addBook
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
