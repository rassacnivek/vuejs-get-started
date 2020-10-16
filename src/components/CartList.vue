<template>
  <div>
    <ul class="cartlist__list" v-if="this.cartList !== null">
      <li class="cartlist__item header" key="header">
        <div class="cartlist__item-wrapper">
          <div class="cartlist__item-presentation">Product</div>
          <div class="cartlist__item-price">Price</div>
          <div class="cartlist__item-quantity">Quantity</div>
          <div class="cartlist__item-total">Total</div>
        </div>
        <Button text="Clear all" class="cartlist" :event="clearCart" />
      </li>
      <li
        class="cartlist__item"
        v-for="cartitem in this.cartList"
        :key="cartitem.id"
      >
        <router-link :to="`product/${cartitem.id}`" class="cartlist__item-link">
          <div class="cartlist__item-presentation">
            <img
              :src="cartitem.image"
              alt="Product Image"
              class="cartlist__item-image"
            />
            <div class="cartlist__item-title">{{ cartitem.title }}</div>
          </div>
          <div class="cartlist__item-price">
            $ {{ formatPrice(cartitem.price) }}
          </div>
          <div class="cartlist__item-quantity">{{ cartitem.qty }}</div>
          <div class="cartlist__item-total">
            $ {{ formatPrice(cartitem.price * cartitem.qty) }}
          </div>
        </router-link>
        <Button
          text="-"
          class="cartlist"
          :event="() => removeAndRefresh(cartitem)"
        />
      </li>
      <li class="cartlist__item" key="footer">
        <div class="cartlist__item-totals">
          $ {{ formatPrice(getTotal(this.cartList)) }}
        </div>
      </li>
    </ul>
    <div class="no-cart" v-else>Votre panier est vide.</div>
  </div>
</template>

<script>
import Format from "@/mixins/Format";
import Cart from "@/mixins/Cart";
import Button from "@/components/Button";
export default {
  components: { Button },
  props: {
    cartList: Array,
  },
  mixins: [Format, Cart],
  methods: {
    removeAndRefresh: function (a) {
      this.removeItemCart(a);
      this.cartList = JSON.parse(this.getCart());
    },
    removeAll: function () {
      this.clearCart();
      this.cartList = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.cartlist {
  &__list {
    padding: 30px;
  }
  &__item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding: 10px;
    &.header {
      .cartlist__item {
        &-wrapper {
          display: flex;
          align-items: center;
          width: 85%;
          & > * {
            padding: 10px;
          }
        }
        &-presentation {
          display: flex;
          align-items: center;
          width: 60%;
        }
        &-image {
          width: 70px;
          height: 70px;
          border-radius: 35px;
          margin-right: 20px;
        }
        &-title {
        }
        &-quantity {
          display: flex;
          align-items: center;
          width: 10%;
        }
        &-price,
        &-total {
          display: flex;
          align-items: center;
          width: 15%;
        }
        &-button {
          display: flex;
          align-items: center;
          width: 20%;
          padding: 0;
        }
      }
    }
    & > * {
      padding: 10px;
    }
    &-link {
      display: flex;
      align-items: center;
      width: 85%;
      & > * {
        padding: 10px;
      }
    }
    &-presentation {
      display: flex;
      align-items: center;
      width: 60%;
    }
    &-image {
      width: 70px;
      height: 70px;
      border-radius: 35px;
      margin-right: 20px;
    }
    &-title {
    }
    &-quantity {
      display: flex;
      align-items: center;
      width: 10%;
    }
    &-price,
    &-total {
      display: flex;
      align-items: center;
      width: 15%;
    }
    &-button {
      display: flex;
      align-items: center;
      width: 20%;
    }
    &-totals {
      display: flex;
      align-items: center;
      width: 15%;
      margin-left: calc(85% - 70px);
    }
    &-description {
      width: 40%;
      font-size: 14px;
    }
    &:last-child {
      width: 84%;
      justify-content: flex-end;
      border: none;
    }
  }
}
.no-cart {
  padding: 30px 0;
}
</style>