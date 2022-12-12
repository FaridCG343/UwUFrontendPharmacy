import { createRouter, createWebHistory } from 'vue-router'
import StartMenu from './components/loginScreen/StartMenu.vue'
import MainSales from './components/Sales/MainSales.vue'
import UserMenu from './components/User/UserMenu.vue'
import UserRegister from './components/User/UserRegister.vue'
import MainProductsView from './components/ProductsView/MainProductsView.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: StartMenu },
        { path: "/ventas", component: MainSales },
        { path: "/products", component: MainProductsView },

        { path: "/user", component: UserMenu },
        { path: "/user/register", component: UserRegister }
    ]
})

export default router;