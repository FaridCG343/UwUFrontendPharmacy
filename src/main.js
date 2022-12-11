import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import StartMenu from './components/loginScreen/StartMenu.vue'
import MainSales from './components/ventasScreen/MainSales.vue'

const routes = [
    {
        path: '/',
        component: StartMenu
    },
    {
        path: '/venta',
        component: MainSales
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active',
});

const app = createApp(App);
app.mount('#app')
app.use(router)
