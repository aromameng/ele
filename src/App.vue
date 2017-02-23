<template>
  <div id="app">
    <div class="container">
      <transition :name="transName">
        <router-view class="view"></router-view>
      </transition>
    </div>
    <menulist :is-show="menuStatus"></menulist>
    <!-- 页面切换遮罩，防止切换中点击页面空白的bug -->
    <div class="view-cover" :class="{open:isCover}"></div>
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
      transName:'slideLeft',
      isCover:false
    }
  },
  computed: {
    ...mapGetters({
       menuStatus: 'getMenuStatus'
    })
  },
  created(){
    this.$router.beforeEach((to, from, next) => {
       let len=to.path.split('/').length;
       if(len>2){
         this.transName = 'slideRight';
       }
       next();
    })
    this.$router.afterEach((to,from) => {
      let len=to.path.split('/').length;
      this.transName = 'slideLeft';
      if(len>2){
        this.transName = 'slideRight';
      }
    })
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
