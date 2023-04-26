import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import DemosView from '../views/DemosView.vue'
import DownloadCV from '../views/DownloadCV.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/demos',
      name: 'demos',
      component: DemosView
    },
    {
      path: '/downloadCV',
      name: 'downloadCV',
      component: DownloadCV
    },
  ]
})

export default router
