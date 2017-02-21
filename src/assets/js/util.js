import Vue from 'vue'

/* 弹出错误信息
    @param msg `String` 要显示的错误信息
    @param handler `Function` 显示完错误信息之后要执行的函数 - 可选
    @param duration `Number` 错误信息停留的时间（毫秒） - 可选
   Usage:
    toast(res.status.msg, function () {
      // do something...
    }, 1000)
*/
export const toast = function(msg, handler = function() {}, duration = 2000) {
  var tip = new Vue({
    data: {
      msg: msg,
      isShow:false
    },
    template: '<div class="cp-toast" v-show="isShow"><table><tr><td><span class="msg">{{msg}}</span></td></tr></table></div>',
    created() {
      var _this = this;
      this.isShow=true;
      if (duration != 'forever') {
        setTimeout(function() {
          document.body.removeChild(_this.$mount().$el);
          _this.isShow=true;
        }, duration);
      }
    },
    destroyed() {
      handler();
    }
  });
  document.body.appendChild(tip.$mount().$el); // 手动挂载
}
