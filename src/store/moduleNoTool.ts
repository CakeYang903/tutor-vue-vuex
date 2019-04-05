import requestAsync from "./_nativeApi";

interface state {
  [key: string]: any;
}
/**
 * Res stands for response or resources both start with r.e.s.
 */
const state = {
  messageNoToolRes: null,
};
const getters = {
  messageNoToolRes: (state: state) => {
    return state.messageNoToolRes;
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
    const response: response = await requestAsync("get", {
      url: "/message",
    });
    store.commit('setMessageNoToolRes', response)
  },
};

const mutations = {
  setMessageNoToolRes: (state: state, response: response) => {
    state.messageNoToolRes = response;
  },
};

export default { state, getters, actions, mutations };
