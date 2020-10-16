<template>
  <div class="shop">
    <TitlePage :title="titleShop" />
    <ProductsList :products="this.productsList" />
  </div>
</template>

<script>
import TitlePage from "@/components/TitlePage";
import ProductsList from "@/components/ProductsList";
import ApiProducts from "@/mixins/ApiProducts";
export default {
  components: { TitlePage, ProductsList },
  data: function () {
    return {
      titleShop: "Shop",
      productsList: [],
    };
  },
  created() {
    this.getProducts()
      .then((data) => (this.productsList = data))
      .catch((error) => console.log(error));
  },
  mixins: [ApiProducts],
};
</script>

<style lang="scss" scoped>
</style>