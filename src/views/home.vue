<template>
  <div class="hello">
    <c-head></c-head>
    <div class="view-content">
      <div class="home-img">
    		<img src="../assets/img/campus-home.png">
    	</div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  created(){

  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .homeview{
  	height:100%;
  	position:relative;
  	overflow: hidden;
  	padding:0;
  }
  .home-img{
  	max-height:100%;
  }
  .home-img img{
  	width:100%;
  }
</style>
