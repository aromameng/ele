<template>
	<section>
		<div class="menu" transition="menu" v-if="isShow">
			<ul>
				<li @click="clickMenu" v-bind:class="{'active':$route.name=='home'}"><router-link :to="{'name':'home'}">首页</router-link></li>
				<li @click="clickMenu" v-bind:class="{'active':$route.name=='about'}"><router-link :to="{'name':'about'}">关于</router-link></li>
				<li @click="clickMenu" v-bind:class="{'active':$route.name=='news'}"><router-link :to="{'name':'news'}">新闻</router-link></li>
			</ul>
		</div>
		<div class="menu-mask" @click="clickMenu" transition="mask" v-if="isShow"></div>
	</section>
</template>
<script>

	export default {
        data () {
            return {

            }
        },
        props: {
            isShow: {
                default: false,
                type: Boolean
            }
        },
        methods: {
					clickMenu(){
						this.$store.dispatch('clickMenu');
					}
        }
    }
</script>
