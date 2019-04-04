import Vue from 'vue'
/**
 * 只是把字串第一個字轉成小寫
 * @param type 
 */
function uncaptalize(type: string) {
  return type.charAt(0).toLowerCase() + type.slice(1);
}

interface typeGroup {
  [key: string]: string
}
export const createTypes = (types: Array<string>) => {
  const typeGroup: typeGroup = {}
  types.forEach(typeString => {
    typeGroup[typeString] = typeString
  })
  return typeGroup
}

interface getters {
  [key: string]: Function
}
interface state {
  [key: string]: any
}
export const createGetters = (types: Array<string>) => {
  const getters: getters = {}
  Object.keys(types).forEach(type => {
    const replacedType = type.replace(/get|post|put|delete/, "")
    const camelCaseType = uncaptalize(replacedType)
    const camelCaseTypeRes = camelCaseType + 'Res'
    getters[camelCaseTypeRes] = (state: state) => {
      return state[camelCaseTypeRes]
    }
  })
  return getters
}

interface mutations {
  [key: string]: Function
}
interface payload {
  [key: string]: any
}
export const createMutations = (types: Array<string>) => {
  const mutations: mutations = {}
  Object.keys(types).forEach(type => {
    const replacedType = type.replace(/get|post|put|delete/, "")
    const mutationName = 'set' + replacedType + 'Res'
    const camelCaseType = uncaptalize(replacedType)
    const attributeName = camelCaseType + 'Res'
    mutations[mutationName] = (state: state, payload: payload) => {
      Vue.set(state, attributeName, payload)
    }
  })
  return mutations
}