import { createTypes, createGetters, createMutations } from "./_vuexTool";
import requestAsync from "./_vuexApi";

/**
 * TypeGroup作為module核心，創造了state, getter與mutation 
 */
const typeGroup: { [key: string]: string } = createTypes(["getMessageByTool"]);

const state = {
  // 不用自己創造State的欄位 
};
const getters = {
  // 不用自己創造getters的欄位 
  ...createGetters(typeGroup)
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
    await requestAsync(store, typeGroup.getMessageByTool, {
      url: "/message",
    });
  },
};

const mutations = {
  // 不用自己創造mutations的欄位 
  ...createMutations(typeGroup)
};

export default { state, getters, actions, mutations };
