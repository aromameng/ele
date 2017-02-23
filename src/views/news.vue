<template>
  <div class="newsview page-news">
    <c-head></c-head>
    <div class="view-content">
      <ul class="newsList">
        <li v-for="item in topics" @click="go(item.id)">
          <span class="title">{{item.title}}</span>
          <span class="date">{{item.create_at |　dateFormat}}</span>
        </li>
      </ul>
      <dialog v-bind:show.sync="show">
        <header class="dialog-header" slot="header">
          <h1 class="dialog-title">提示信息</h1>
        </header>
        <div class="dialog-body" slot="body">
          <p>你想在对话框中放什么内容都可以！</p>
          <p>你可以放一段文字，也可以放一些表单，或者是一些图片。</p>
        </div>
        <footer class="dialog-footer" slot="footer">
          <button class="c-btn" @click="closeDialog">关闭</button>
        </footer>
      </dialog>
      <!-- <a class="c-btn" @click="openDialog">点击弹窗</a> -->
    </div>
  </div>
</template>
<script>
import {toast} from '../assets/js/util'
import dialogBox from '../components/dialog.vue'
import $ from 'webpack-zepto';

export default {
  //==数据配置===
  data() {
      return {
        show: false,
        nCount: 0,
        isShow:false,
        searchKey:'',
        topics:[]
      }
    },
    components: {
      dialogBox
    },
    created(){
      this.getData();
    },
    methods: {
      go(id) {
        this.$parent.go({
          'name': 'newsView',
          params: {
            id: id
          }
        });
      },
      tip() {
        //this.$toast('提示窗口！');
        toast('提示窗口！');
      },
      closeDialog() {
        this.show = false;
      },
      openDialog() {
        this.show = true;
        this.isShow=true;
      },
      getData(){
        let params = $.param(this.searchKey);
        $.get('https://cnodejs.org/api/v1/topics?' + params, (d) => {
            if (d && d.data) {
                this.topics = d.data;
            }
        });
      }
    }
}
</script>

<style lang="scss">

</style>
