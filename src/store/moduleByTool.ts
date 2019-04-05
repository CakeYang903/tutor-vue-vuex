import { createTypes, createGetters, createMutations } from "./_vuexTool";
import requestAsync from "./_vuexApi";

const types = createTypes(["getMessageByTool"]);

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
  ...createGetters(types)
};

interface store {
  commit: () => void;
  state: {
    [key: string]: any;
  };
}
const actions = {
  // Restful API - const static data
  getMessageByTool: async (store: store) => {
    await requestAsync(store, types.getMessageByTool, {
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
