<template>
  <div class="product__wrapper">
    <div class="product__wrapper-image">
      <img :src="product.image" alt="Product image" />
    </div>
    <div class="product__wrapper-text">
      <div class="text__header">
        <div class="text__header-category">{{ product.category }}</div>
        <div class="text__header-price">$ {{ product.price }}</div>
      </div>
      <div class="text__content">
        <div class="text__content-title">{{ product.title }}</div>
        <div class="text__content-description">{{ product.description }}</div>
      </div>
      <Button text="Add" :event="() => addToCart(product)" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Cart from "@/mixins/Cart";
export default {
  components: { Button },
  props: {
    product: Object,
  },
  mixins: [Cart],
};
</script>

<style lang="scss" scoped>
.product__wrapper {
  display: flex;
  padding: 30px;
  &-image {
    width: 50%;
    img {
      max-height: 100%;
      width: 100%;
    }
  }
  &-text {
    width: 50%;
    padding: 20px;
    .text {
      &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &__content {
        margin-bottom: 10px;
        &-title {
          font-size: 24px;
          font-weight: 700;
          padding: 50px 0;
        }
        &-description {
          font-size: 14px;
        }
      }
    }
  }
}
</style>