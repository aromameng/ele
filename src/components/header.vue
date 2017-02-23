<template>
<header class="header">
  <img class="logo" v-if="showLogo" src="../assets/img/logo.png" />
  <span class="back" @click="back" v-if="showBack">返回</span>
  <h1>{{$route.meta.title}}</h1>
  <div class="close" @click="clickMenu" v-if="showMenu">
    <span class="close-icon" v-bind:class="{'open':menuStatus}"></span>
  </div>
</header>
</template>

<script>
import {
    mapGetters
} from 'vuex';

export default {
  data() {
    return {

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
    console.log(this.$route.title)
  },
  methods: {
    back: function() {
      if(this.$route.name=='about'||this.$route.name=='news'){
        this.$router.push({name:'home'});
      }else{
        history.back(-1);
      }
      if(this.menuStatus){
        this.clickMenu();
      }
    },
    clickMenu(){
      this.$store.dispatch('clickMenu');
    }
  }
}
</script>
