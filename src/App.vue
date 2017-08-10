<template>
<div id="app">
  <div class="container">
    <transition :name="transName">
      <router-view class="view"></router-view>
    </transition>
  </div>
  <menulist :is-show="menuStatus"></menulist>
  <div class="loading" v-show="showLoading">
    <div class="pic"></div>
  </div>
</div>
</template>

<script>
import menulist from './components/menu.vue'
import {
  mapGetters
} from 'vuex';

export default {
  data() {
    return {
      transName: 'fade'
    }
  },
  computed: {
    ...mapGetters({
      menuStatus: 'getMenuStatus',
      showLoading:'getLoadStatus'
    })
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let len = to.path.split('/').length;
      let fLen = from.path.split('/').length;
      if (len > 2) {
        this.transName = 'slideRight';
      }
      if (len < 3 && fLen < 3) {
        this.transName = 'fade';
      }
      next();
    })
    this.$router.afterEach((to, from) => {
      let len = to.path.split('/').length;
      let fLen = from.path.split('/').length;
      this.transName = 'slideLeft';
      if (len > 2) {
        this.transName = 'slideRight';
      }
      if (len < 3 && fLen < 3) {
        this.transName = 'fade';
      }

    })
  },
  methods: {
    go(route) {
      this.$router.push(route);
    }
  },
  components: {
    menulist
  }
}
</script>

<style lang='scss'>@import "./assets/scss/app.scss";

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
