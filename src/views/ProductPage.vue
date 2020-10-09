<template>
  <div id="product">
    <TitlePage title="Product" />
    <ProductDisplay :product="productData" />
  </div>
</template>

<script>
import TitlePage from "@/components/TitlePage";
import ProductDisplay from "@/components/ProductDisplay";
import ApiProducts from "@/mixins/ApiProducts";
export default {
  components: { TitlePage, ProductDisplay },
  data: function () {
    return {
      titleShop: "Shop",
      productData: [],
    };
  },
  created() {
    this.getProduct(this.$route.params.id)
      .then((data) => (this.productData = data))
      .catch((err) => console.log(error));
  },
  mixins: [ApiProducts],
};
</script>

<style lang="scss" scoped>
</style>