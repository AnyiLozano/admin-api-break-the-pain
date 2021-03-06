import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import states from "./states";

export default {
    namespaced: true,
    actions: actions,
    mutations: mutations,
    states: states,
    getters: getters
}