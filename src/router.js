import { createRouter, createWebHistory } from 'vue-router'
import StartMenu from './components/loginScreen/StartMenu.vue'
import MainSales from './components/Sales/MainSales.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: StartMenu },
        { path: "/ventas", component: MainSales }
    ]
})

export default router;