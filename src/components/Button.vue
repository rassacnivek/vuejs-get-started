<template>
  <button class="button" @click.prevent="event">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
    event: Function,
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
}
</style>