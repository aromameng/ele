<template>
  <div class="aboutview">
    <c-head></c-head>
    <div class="nav">
      <span v-for="(item,index) of items" :class="{'active': tabIndex===index}" @click="tab(index)">{{item.title}}</span>
    </div>
    <div class="view-content">
      <div class="nav-content" v-html="article"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
        items: [{
          title: '简介',
          content: '<p>饿了么是中国专业的到家服务平台，2009年创立于上海。 饿了么成立至今，秉承极致、激情、创新的企业文化，致力推进中国餐饮业的数字化进程，让7亿城镇居民实现“美好生活，触手可得”。 截止2016年8月，公司员工超过15000人，在线外卖交易平台已覆盖全国1000多个城市，用户量超过7000万，加盟餐厅近60万家，日交易额突破1.6亿元，日订单量突破500万单，平台上超过99.5%的交易额来自移动端。</p><p>饿了么正改变着人们的饮食消费习惯乃至生活方式，定义到家消费的未来，努力向广大城镇居民兑现“美好生活，触手可得”的承诺。其在外卖交易平台、即时配送物流平台及供应链平台上的持续发力<p>在线外卖交易是饿了么的核心业务，主要从事用户和商户的交易撮合，目前已发展为全品类外卖平台，覆盖从早餐到夜宵的所有订餐时段及不同档次的餐饮品类。饿了么自主研发的Napos系统，是国内最早的外卖订单后台管理系统之一，为外卖商家带来极大的便利，推动了餐饮业的互联网化。</p><p>物流是外卖服务的基础。2015年8月，饿了么建立外卖行业首个即时配送物流平台，旨在搭建全国性的即时配送网络。物流平台包括自营配送团队、第三方加盟团队以及社会化众包配送。截止2016年7月，配送日处理订单高达260万单，配送人员达130万人，覆盖全国1000多个城市。其中，饿了么自配送团队已经在上海、北京、广州等25个一二线城市覆盖有300多个配送站点，并与30000多家品牌餐厅展开合作，专职配送员超过6000人，标准配送人效达每人每天35单，居业界领先地位。<p>'
        }, {
          title: '生活',
          content: '<p>生活多么美丽！</p>'
        }, {
          title: '环境',
          content: '<p>快乐你我他！</p>'
        }],
        // items:[],
        tabIndex: 0,
        article: ''
      }
    },
    computed: {

    },
    created(){
      this.article = this.items[0].content;
    },
    route: {
      data() {
      //  this.article = this.items[0].content;
      }
    },
    methods: {
      tab(_index) {
        this.tabIndex = _index;
        this.article = this.items[_index].content;
      }
    },
    components: {

    }
}
</script>
