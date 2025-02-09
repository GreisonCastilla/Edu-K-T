import { createWebHistory, createRouter } from 'vue-router'

import StudentMain from '../views/StudentMain.vue'
import LoginView from '../views/LoginView.vue'
import App from '../App.vue'

const routes = [
  {path:'/', component:LoginView},
  {path:'/student', component:StudentMain},
  { path: '/login', component: LoginView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})