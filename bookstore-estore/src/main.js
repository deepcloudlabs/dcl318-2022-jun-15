import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import BookBasket from "@/views/BookBasket";
import BookStore from "@/views/BookStore";
import {createRouter, createWebHistory} from "vue-router";
import BookOrders from "@/views/BookOrders";

const routes = [
    {path: "/", component: BookStore},
    {path: "/basket", component: BookBasket},
    {path: "/orders", component: BookOrders}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app')
