export default {
  methods: {
    addToCart(p) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let tmp = {
        id: p.id,
        title: p.title,
        image: p.image,
        price: p.price,
        qty: 1,
      };

      let indexOfExistingProduct = cart.findIndex((el) => el.id === p.id);
      if (indexOfExistingProduct !== -1) {
        cart[indexOfExistingProduct].qty += 1;
      } else {
        cart.push(tmp);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    },
    clearCart() {
      localStorage.removeItem('cart')
    },
    removeItemCart(p) {
      let cart = JSON.parse(localStorage.getItem('cart'));
      const indexOfExistingProduct = cart.findIndex((el) => el.id === p.id);
      if (cart[indexOfExistingProduct].qty === 1) {
        cart.splice(indexOfExistingProduct, 1);
      } else {
        cart[indexOfExistingProduct].qty -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    getCart() {
      return localStorage.getItem('cart')
    },
    getCartCount() {
      let cart = JSON.parse(localStorage.getItem('cart'));
      cpt = 0;
      if (cart !== null) {
        cart.forEach(el => {
          cpt += el.qty;
        });
      }
      return cpt;
    }
  }
}