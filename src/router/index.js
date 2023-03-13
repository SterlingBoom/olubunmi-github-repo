import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Repo from '../pages/Repo.vue'
import NotFound from '../pages/NotFound.vue'
import RepoDetails from '../components/RepoDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/repo',
    name: 'Repo',
    component: Repo,
  },
  {
    path:"/repo/:id",
    name:"RepoDetails",
    component:RepoDetails,
  },

  {
  path: "/:catchAll(.*)",
  name: "NotFound",
  component: NotFound,
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
