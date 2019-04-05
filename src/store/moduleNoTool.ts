import requestAsync from "./_vuexApi";

interface state {
  [key: string]: any;
}

const state: state = {
  messageNoTool: null,
};
const getters = {
  messageNoTool: (state: state) => {
    return state.messageNoTool;
  },
};

interface store {
  commit: Function;
  state: {
    [key: string]: any;
  };
}
interface response {
  [key: string]: any,
}
const actions = {
  // Restful API - const static data
  getMessageNoTool: async (store: store) => {
    const response: response = await requestAsync(store, "get", {
      url: "ccxt/symbols",
    });
    store.commit('setMessageNoTool', response)
  },
};

const mutations = {
  // Navigation
  setMessageNoTool: (state: state, response: response) => {
    state.messageNoTool = response;
  },
};

export { state, getters, actions, mutations };
