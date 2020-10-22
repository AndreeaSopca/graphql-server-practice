<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AllBooks msg="Welcome to Your Vue.js App"/>
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
