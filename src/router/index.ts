import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detail from '../views/Detail.vue'
import Test from '../views/test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      props:true,
      name: 'Detail',
      component: Detail
    },
    {
      path: '/test',
      props:true,
      name: 'test',
      component: Test
    },
  ]
})

export default router
