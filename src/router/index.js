import { createRouter, createWebHistory } from 'vue-router';
import TodoView from '../views/TodoView.vue';
import TodoAbout from '../views/TodoAbout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodoView
    }, {
      path: '/about',
      name: 'about',
      component: TodoAbout
    }
  ]
})

export default router
