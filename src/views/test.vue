<template>
  <div class="test-view">
    <c-head></c-head>
    <div class="content">
      <p v-color="initColor">测试</p>
      <p v-active>点击</p>
    </div>  
  </div>
</template>
<script>
export default {
  data() {
      return {
        initColor:'#f00'
      }
    },
    computed: {

    },
    created(){
      
    },
    route: {
      data() {
      
      }
    },
    methods: {
      
    },
    components: {

    }
}
</script>
