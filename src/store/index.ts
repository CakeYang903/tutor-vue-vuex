import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

/**
 * 用了Typescript以後原本很無痛的JS原生引入Vuex Module就不能用了，
 * 算是個Trade Off
 */
import moduleByTool from './moduleByTool';
import moduleNoTool from './moduleNoTool';
const modules: any = {
  moduleByTool,
  moduleNoTool
}
// Initialize Vuex
const debug: boolean = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
  modules,
  strict: debug,
  // plugins: debug ? [createLogger()] : []
});
