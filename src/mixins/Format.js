export default {
  methods: {
    formatPrice(price) {
      if (price !== null && typeof price !== "undefined") {
        if (typeof price !== "string") {
          price = price.toString();
        }
        if (price.indexOf('.') === price.length - 2) {
          price += "0";
        }
        if (price.indexOf('.') !== -1 && price.split('.')[1].length > 2) {
          price = Number.parseFloat(price).toFixed(2)
        }
        return price;
      }
    },
    getTotal(products) {
      let total = 0;
      products.forEach(el => {
        total += el.price * el.qty;
      });
      return total;
    }
  }
}