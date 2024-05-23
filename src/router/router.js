// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ViewHome from '../views/ViewHome.vue';
import ViewScoresweb from '../views/ViewScoresweb.vue';
import ViewLogin from '../views/ViewLogin.vue';
import ViewRegister from '../views/ViewRegister.vue';
import ViewChangePassword from '../views/ViewChangePassword.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ViewHome,
    },
    {
        path: '/scoresweb',
        name: 'Scoresweb',
        component: ViewScoresweb,
    },
    {
        path: '/login',
        name: 'Login',
        component: ViewLogin,
    },
    {
        path: '/register',
        name: 'Register',
        component: ViewRegister,
    },
    {
        path: '/changepassword',
        name: 'ChangePassword',
        component: ViewChangePassword,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'Home' }
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  

export default router;