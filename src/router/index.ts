import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detail from '../views/Detail.vue'
import Test from '../views/test.vue'
import Chat from '../views/Chat.vue'
import Create from '../views/Create.vue'
import Vedio from '../views/Vedio.vue'

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
      path: '/create',
      props:true,
      name: 'Create',
      component: Create
    },
    {
      path: '/test',
      props:true,
      name: 'test',
      component: Test
    },
    {
      path: '/chat',
      props:true,
      name: 'Chat',
      component: Chat
    },
    {
      path: '/vedio',
      props:true,
      name: 'Vedio',
      component: Vedio
    },
  ]
})

export default router
