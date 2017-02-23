import Vue from 'vue';

Vue.filter('dateFormat', function(value) {
  if(!value) return;
  return value.toString().substr(0,10);
});
