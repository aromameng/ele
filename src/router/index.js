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
        menu:true,
        title:'关于我们'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      meta:{
        menu:true,
        title:'新闻'
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
