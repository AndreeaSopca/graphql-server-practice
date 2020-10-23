<template>
  <div id="app" class="m-20 h-auto">
    <h3 class="text-center font-bold text-black text-5xl pt-10 tracking-wider border-b-2 mb-5 ">List of books</h3>
    <AllBooks/>
    <BookForm/>
  </div>
</template>

<script>
import AllBooks from './components/AllBooks.vue'
import BookForm from "@/components/BookForm";

export default {
  name: 'App',
  components: {
    AllBooks,
    BookForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
