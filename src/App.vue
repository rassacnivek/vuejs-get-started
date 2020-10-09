<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
}

html,
body {
  margin: 0;
}

body {
  background-color: #ffffff;
}

a {
  text-decoration: none;
  color: #2c3e50 !important;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default { components: { Header, Footer } };
</script>