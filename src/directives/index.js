import Vue from 'vue'

// 初始化颜色
Vue.directive('color', {
  bind: (el, binding, vnode) => {
    console.log(el)
    console.log(binding)
    console.log(vnode)
    el.style.color = binding.value;
  }
})

// 模拟hover效果
Vue.directive('active', function(el) {
  let startHandler = function() {
    el.className += ' active';
  };
  let endHandler = function() {
    el.className = el.className.replace(' active', '');
  };
  el.addEventListener('touchstart', startHandler);
  el.addEventListener('touchend', endHandler);
});
