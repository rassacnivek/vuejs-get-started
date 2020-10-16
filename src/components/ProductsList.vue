<template>
  <div>
    <ul class="products__list">
      <li class="products__item" key="header">
        <div class="products__item-presentation">Product</div>
        <div class="products__item-category">Category</div>
        <div class="products__item-price">Price</div>
        <div class="products__item-description">Description</div>
      </li>
      <li
        class="products__item"
        v-for="product in this.products"
        :key="product.id"
      >
        <router-link :to="`product/${product.id}`" class="products__item-link">
          <div class="products__item-presentation">
            <img
              :src="product.image"
              alt="Product Image"
              class="products__item-image"
            />
            <div class="products__item-title">{{ product.title }}</div>
          </div>
          <div class="products__item-category">{{ product.category }}</div>
          <div class="products__item-price">
            $ {{ formatPrice(product.price) }}
          </div>
          <div class="products__item-description">
            {{ product.description }}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Format from "@/mixins/Format";
export default {
  props: {
    products: Array,
  },
  mixins: [Format],
};
</script>

<style lang="scss" scoped>
.products {
  &__list {
    padding: 30px;
  }
  &__item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding: 10px;
    & > * {
      padding: 10px;
    }
    &-link {
      display: flex;
      align-items: center;
    }
    &-presentation {
      display: flex;
      align-items: center;
      width: 40%;
    }
    &-image {
      width: 70px;
      height: 70px;
      border-radius: 35px;
      margin-right: 20px;
    }
    &-title {
    }
    &-category {
      width: 10%;
    }
    &-price {
      width: 10%;
    }
    &-description {
      width: 40%;
      font-size: 14px;
    }
    &:last-child {
      border: none;
    }
  }
}
</style>