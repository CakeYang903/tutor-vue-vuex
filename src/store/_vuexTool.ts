import Vue from "vue";
/**
 * 只是把字串第一個字轉成小寫
 * @param type
 */
function uncaptalize(type: string) {
  return type.charAt(0).toLowerCase() + type.slice(1);
}

interface typeGroup {
  [key: string]: string;
}
export const createTypes = (types: Array<string>) => {
  const typeGroup: typeGroup = {};
  types.forEach(typeString => {
    typeGroup[typeString] = typeString;
  });
  return typeGroup;
};

export const createGetters = (typeGroup: typeGroup) => {
  const getters: any = {};
  for (let type in typeGroup) {
    const replacedType = type.replace(/get|post|put|delete/, "");
    const camelCaseType = uncaptalize(replacedType);
    const camelCaseTypeRes = camelCaseType + "Res";
    getters[camelCaseTypeRes] = (state: any) => {
      return state[camelCaseTypeRes];
    };
  }
  return getters;
};

export const createMutations = (typeGroup: typeGroup) => {
  const mutations: any = {};
  for (let type in typeGroup) {
    const replacedType = type.replace(/get|post|put|delete/, "");
    const mutationName = "set" + replacedType + "Res";
    const camelCaseType = uncaptalize(replacedType);
    const attributeName = camelCaseType + "Res";
    mutations[mutationName] = (state: any, payload: any) => {
      Vue.set(state, attributeName, payload);
    };
  }
  return mutations;
};
