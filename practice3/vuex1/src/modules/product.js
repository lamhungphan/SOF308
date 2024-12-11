const state = () => ({
  products: JSON.parse(localStorage.getItem("products")) || [],
});
const getters = {
  allProduct: (state) => state.products,
  productId: (state) => (id) => {
    return state.products.find((p) => p.id === parseInt(id));
  },
  totalValue: (state) => {
    return state.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  },
};
const mutations = {
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
  removeProduct(state, id) {
    state.products = state.products.filter((p) => p.id !== id);
    localStorage.setItem("producst", JSON.stringify(state.products));
  },
};
const actions = {
  async addProduct({ commit }, product) {
    commit("addProduct", product);
  },
  async updateProduct({ commit }, product) {
    commit("updateProduct", product);
  },
  async removeProduct({ commit }, id) {
    commit("removeProduct", id);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
