import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const allStore = new Vuex.Store({
  state: {
    menuStatus: false,
    loadStatus: false
  },
  getters: {
    getMenuStatus(state) {
      return state.menuStatus;
    },
    getLoadStatus(state) {
      return state.loadStatus;
    }
  },
  mutations: {
    // 菜单显示
    clickMenu(state) {
      state.menuStatus = !state.menuStatus;
    },
    // 加载图标显示
    showLoading(state, showInfo) {
      state.loadStatus = showInfo;
    }
  },
  actions: {
    clickMenu({ commit }) {
      commit('clickMenu');
    },
    showLoading({ commit }, showInfo) {
      commit('showLoading', showInfo);
    }
  }
});

export default allStore;
