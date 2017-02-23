<template>
  <div id="app">
    <div class="container">
      <transition name="fadeIn">
        <router-view class="view"></router-view>
      </transition>
    </div>
    <menulist :is-show="menuStatus"></menulist>
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

    }
  },
  computed: {
    ...mapGetters({
       menuStatus: 'getMenuStatus'
    })
  },
  created(){

  },
  methods: {
    go(route){
      this.$router.push(route);
    }
  },
  components: {
      menulist
  }
}
</script>

<style lang='scss'>
@import "./assets/scss/app.scss";

#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
