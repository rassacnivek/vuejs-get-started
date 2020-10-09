<template>
  <div class="home">
    <h1 v-html="myRedTitle"></h1>
    <p>{{ myName }}</p>
    <p>{{ myAge }} ans</p>
    <p v-if="isVisible">You can see me !</p>
    <p v-else>Now, you don't :3</p>
    <input type="text" v-model="myName" />
    <span v-once>Mon nom est {{ myName }}</span>
    <div class="product__list">
      <div
        class="product__item"
        v-for="product in myProducts"
        :key="product.index"
      >
        <h2>{{ product.name }}</h2>
        <h4>{{ product.price }} €</h4>
        <img :src="product.img" alt="Une paire de chaussure Nike" />
        <a :href="product.img">Lien de l'image</a>
      </div>
    </div>
    <button @click="sayHello">Say Hello</button>
    <button @click="sayMyName(myName)">Say my name</button>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>

export default {
  name: "Home",
  components: {},
  data: function () {
    return {
      myName: "Kévin",
      myAge: 21,
      myProducts: [
        {
          name: "Air Max 720 Fade",
          price: 180,
          img:
            "https://cdn.sanity.io/images/c1chvb1i/production/82d0444facaf27ad65039ce507723f84059d8f01-700x468.jpg/nike-air-max-720-AO2924-019-medial.jpg",
        },
        {
          name: "Air Max 90",
          price: 120,
          img:
            "https://media.chausport.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/10019185-chaussures-nike-air-max-90-grise-blanche-et-noire-vue-par-paire.jpg",
        },
        {
          name: "Air Max 270",
          price: 170,
          img:
            "https://c.static-nike.com/a/images/t_default/s6dp2gck3oukxj9csz5y/chaussure-air-max-270-pour-8HhX8Z.jpg",
        },
      ],
      myInfos: {},
      isVisible: true,
      myRedTitle: '<strong style="color:red;">Bonjour</strong>',
    };
  },
  methods: {
    sayHello: function () {
      alert("Hello");
    },
    sayMyName: function (myName) {
      alert(`Hello ${myName}`);
    },
  },
};
</script>
