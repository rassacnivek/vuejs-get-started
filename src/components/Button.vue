<template>
  <button :class="`button ${this.classProp}` " @click.prevent="event">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
    event: Function,
    classProp: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  background-color: #42b983;
  border: 2px solid #42b983;
  border-radius: 35% 65%;
  text-transform: uppercase;
  padding: 10px 0;
  width: 30%;
  cursor: pointer;
  color: white;
  &.cartlist{
    width: 15%;
  }
}
</style>