import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '@/App.vue'
import Login from '@/view/login/login.vue'
import User from '@/view/userTenant/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/hello',
      name:'Hello',
      component: HelloWorld
    }
  ]
})
