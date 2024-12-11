const product = {
  namespaced: true,
  state: {
    products: JSON.parse(localStorage.getItem("products")) || [],
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },
    getProductBysCategory: (state) => (category) => {
      if (!category) {
        return state.products.filter((p) => p.category === category);
      }
      return state.products;
    },
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    updateProduct(state, product) {
      const index = state.products.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        state.products[index] = product;
        localStorage.setItem("products", JSON.stringify(state.products));
      }
    },
    removeProduct(state, productId) {
      state.products = state.products.filter((p) => p.id !== productId);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
  actions: {
    async updateProduct({ commit }, product) {
      commit("updateProduct", product);
    },
    async addProduct({ commit }, product) {
      commit("addProduct", product);
    },
    async removeProduct({ commit }, productId) {
      commit("removeProduct", productId);
    },
  },
};
export default product;
