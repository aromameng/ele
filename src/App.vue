<template>
  <div id="app">
    <header class="header">
      <img class="logo" v-if="showLogo" src="./assets/img/logo.png" />
      <span class="back" @click="back" v-if="showBack">返回</span>
      <h1>{{$route.title}}</h1>
      <div class="close" @click="clickMenu" v-if="showMenu">
        <span class="close-icon" v-bind:class="{'open':menuStatus}"></span>
      </div>
    </header>
    <div class="container">
      <router-view></router-view>
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
      currentView: ''
    }
  },
  computed: {
    showBack() {
      return !this.$route.meta || this.$route.meta.back;
    },
    showMenu(){
      return !this.$route.meta || this.$route.meta.menu;
    },
    showLogo(){
      return !this.$route.meta || this.$route.meta.logo;
    },
    ...mapGetters({
       menuStatus: 'getMenuStatus'
    })
  },
  created(){

  },
  methods: {
    back: function() {
      if(this.$route.name=='about'||this.$route.name=='news'){
        this.go({name:'home'});
      }else{
        history.back(-1);
      }
      if(this.menuStatus){
        this.clickMenu();
      }
    },
    clickMenu(){
      this.$store.dispatch('clickMenu');
    },
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
@import "./assets/scss/_common.scss";

#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
