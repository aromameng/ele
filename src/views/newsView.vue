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

export default {
  //==数据配置===
  data() {
      return {
        id: '',
        title: '',
        content: '',
        topicId:'',
        noData:false,
        topic:''
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
       getData(){
          // 加载主题数据
          $.get('https://cnodejs.org/api/v1/topic/' + this.topicId, (d) => {
              if (d && d.data) {
                  this.topic = d.data;
              } else {
                  this.noData = true;
              }
          });
       }
    },
}
</script>

<style lang="scss">
  .newsview{
    .newsList{
      li{
        line-height: 30px;
        font-size: px2rem(14px);
      }
    }
  }
</style>
