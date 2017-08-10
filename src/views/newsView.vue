<template>
<div class="newsview page-news-view">
  <c-head></c-head>
  <div class="view-content">
    <h3 class="title">{{topic.title}}</h3>
    <p class="time">发布于：{{topic.create_at |　dateFormat}}</p>
    <hr>
    <div class="main" v-html="topic.content"></div>
    <div class="no-data" v-if="noData">没有相关内容！</div>
  </div>
</div>
</template>

<script>
import $ from 'webpack-zepto';
import axios from 'axios';

export default {
  //==数据配置===
  data() {
    return {
      id: '',
      title: '',
      content: '',
      topicId: '',
      noData: false,
      topic: ''
    }
  },
  computed: {

  },
  created() {
    var _this = this;
    // 获取url传的id参数
    this.topicId = this.$route.params.id;
    this.getData();
  },
  methods: {
    getData() {
      var that=this;
      // 加载主题数据
      /* 使用ajax加载
      $.ajax({
        url: 'https://cnodejs.org/api/v1/topic/' + this.topicId,
        type: 'get',
        timeout: 2000,
        beforeSend: () => {
          this.$parent.showLoading = true;
        },
        complete: () => {
          this.$parent.showLoading = false;
        },
        success: (d) => {
          if (d && d.data) {
            this.topic = d.data;
          } else {
            this.noData = true;
          }
        }
      })
      */
      this.$store.dispatch('showLoading',true);
      axios.get('https://cnodejs.org/api/v1/topic/' + this.topicId)
      .then(function (d) {
        console.log(d);
        that.$store.dispatch('showLoading',false);
        if (d && d.data.data) {
          that.topic = d.data.data;
        } else {
          that.noData = true;
        }
      })
      .catch(function (error) {
        that.$store.dispatch('showLoading',false);
        console.log(error);
      });
    }
  },
}
</script>

<style lang="scss">
.newsview {
    .newsList {
        li {
            line-height: 30px;
            font-size: px2rem(14px);
        }
    }
}
</style>
