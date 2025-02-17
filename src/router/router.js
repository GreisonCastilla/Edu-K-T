import { createWebHistory, createRouter } from 'vue-router'

import LoginView from '../views/LoginView.vue'

const routes = [
  {path:'/', component:LoginView},
  {path:'/student/:id', component:()=>import ("../views/StudentMain.vue"), name:'studentMain'}
  
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})