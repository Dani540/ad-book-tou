import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import Reproductor from '@/views/ReproductorView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/play',
        name: 'play',
        component: Reproductor
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;