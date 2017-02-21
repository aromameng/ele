import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const allStore = new Vuex.Store({
    state: {
        menuStatus: false
    },
    getters: {
        getMenuStatus(state) {
            return state.menuStatus;
        }
    },
    mutations: {
        clickMenu(state) {
            state.menuStatus = !state.menuStatus;
        }
    },
    actions: {
        clickMenu({ commit }) {
            commit('clickMenu');
        }
    }
});

export default allStore;
