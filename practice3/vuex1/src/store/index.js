import { createStore } from "vuex";
import product from "@/modules/product";

const store = createStore({
  modules: {
    product: product,
  },
});
export default store;
