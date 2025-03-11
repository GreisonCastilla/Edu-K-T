import { createWebHistory, createRouter } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import StudentMain from '../views/student/StudentMain.vue'

const routes = [
  {path:'/', component:LoginView},
  {path:'/student/', component: StudentMain , name:'studentMain'},
  {path:'/student/:subject/', component:()=>import("../views/student/SubjectView.vue"), name:'subjectStudent', props:true},
  {path:'/student/:subject/:activity', component:()=>import('../views/student/ActivityDetailView.vue'), name: 'SubjectDetailView', props:true}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})