import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: "active",// active class for non-exact links.
  linkExactActiveClass: "active",// active class for *exact* links.
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin'),
      children: [
        {
          path: '/overtime/pass',
          meta: { title: 'Overtime application' },
          component: () => import('./views/overtime/OvertimePass')
        },
        {
          path: '/overtime/petitioner',
          meta: { title: 'Overtime application' },
          component: () => import('./views/overtime/OvertimePetitioner')
        },
        {
          path: '/overtime/attendace',
          meta: { title: 'My attendance record' },
          component: () => import('./views/overtime/Attendance')
        },
        {
          path: '/overtime/leave',
          meta: { title: 'Temporary use record' },
          component: () => import('./views/overtime/LeaveRecord')
        },
        {
          path: '/users',
          meta: { title: 'User Management' },
          component: () => import('./views/account/User')
        },
      ]
    },
    {
      path: '/fb',
      name: 'fb',
      component: () => import('./views/FB.vue')
    },
    {
      path: '/page',
      name: 'page',
      component: () => import('./views/blog/Page')
    },

  ]
})
