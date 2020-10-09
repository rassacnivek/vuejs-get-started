<template>
  <div class="title__page">
    <h1>{{ title }}</h1>
    <h2 v-if="subtitle !== null">{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  name: "TitlePage",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>