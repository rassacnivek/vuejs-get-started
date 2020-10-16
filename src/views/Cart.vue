<template>
  <div class="cart">
    <TitlePage :title="titleShop" />
    <CartList :cartList="this.cartList" />
  </div>
</template>

<script>
import TitlePage from "@/components/TitlePage";
import CartList from "@/components/CartList";
export default {
  components: { TitlePage, CartList },
  data: function () {
    return {
      titleShop: "Cart",
      cartList: JSON.parse(localStorage.getItem("cart")),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>