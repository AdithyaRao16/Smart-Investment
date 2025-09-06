import { createRouter, createWebHistory } from 'vue-router'
import Personal from '../components/PersonalInfo.vue'
import Address from '../components/UserAddress.vue'
import Financial from '../components/FinancialInfo.vue'
import Agreements from '../components/UserAgreements.vue'
import Home from '../components/HomeHub.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/personal', component: Personal },
  { path: '/address', component: Address },
  { path: '/financial', component: Financial },
  { path: '/agreements', component: Agreements },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
