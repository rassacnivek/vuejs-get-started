<template>
  <div id="nav">
    <div class="nav__list">
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/account">Account</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
#nav {
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  .nav__list {
    padding: 20px 0;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>