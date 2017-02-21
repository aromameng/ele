import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'

import home from 'views/home'
import about from 'views/about'
import news from 'views/news'
import newsView from 'views/newsView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta:{
        back:false,
        menu:true,
        logo:true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta:{
        back:true,
        menu:true
      }
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      meta:{
        back:true,
        menu:true
      }
    },
    {
      path: '/news/view/:id',
      name: 'newsView',
      component: newsView,
      meta:{
        back:true
      }
    }
  ]
})
