import { createTypes, createGetters, createMutations } from "./_vuexTool";
import requestAsync from "./_vuexApi";

const types = createTypes(["getTickers"]);

interface state {
  [key: string]: any;
}
const state: state = {
  symbol: "",
};
const getters = {
  exchangeSymbol: (state: state) => {
    return state.symbol;
  },
};

interface store {
  commit: Function;
  state: {
    [key: string]: any;
  };
}
const actions = {
  // Restful API - const static data
  getSymbols: async (store: store) => {
    await requestAsync(store, "get", {
      url: "ccxt/symbols",
    });
  },
};

const mutations = {
  // Navigation
  setSymbol: (state: state, symbol: string) => {
    state.symbol = symbol;
  },
};

export { state, getters, actions, mutations };
