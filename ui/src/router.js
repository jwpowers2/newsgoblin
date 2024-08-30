//import {Vue} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import home from './views/Home.vue'
import homeMobile from './views/HomeMobile.vue'
import about from './views/About.vue'
import nsheader from './components/nsheader.vue'
import adheader from './components/adheader.vue'
import nsabout from './components/nsabout.vue'
import newsticker from './components/newsticker.vue'
import trending from './components/trending.vue'
import querywindow from './components/querywindow.vue'
import headlinewindow from './components/headlinewindow.vue'

//Vue.use(Router)

//export default new Router({
//  mode: 'history',
  //base: process.env.BASE_URL,
const routes = [
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/nsabout',
      name: 'nsabout',
      component: nsabout
    },
    {
      path: '/nsheader',
      name: 'nsheader',
      component: nsheader
    },
    {
      path: '/adheader',
      name: 'adheader',
      component: adheader
    },
    {
      path: '/newsticker',
      name: 'newsticker',
      component: newsticker
    },
    {
      path:'/querywindow',
      name: 'querywindow',
      component: querywindow
    },
    {
      path:'/headlinewindow',
      name: 'headlinewindow',
      component: headlinewindow
    },
    {
      path: '/',
      component: home,
      children: [
        {
        path:'',
        component:trending
        }
      ],
    },
    {
      path: '/homeMobile',
      component: homeMobile,
      children: [
        {
        path:'',
        component:trending
        }
      ],
    }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router


