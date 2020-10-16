import APIConfig from "../config/api.config";

export default {
  methods: {
    getProducts() {
      return fetch(`${APIConfig.apiUrl}products`)
        .then((res) =>
          res.json()
        );
    },
    getProduct(id) {
      return fetch(`${APIConfig.apiUrl}products/${id}`)
        .then((res) =>
          res.json()
        );
    }
  }
}