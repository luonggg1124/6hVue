import { createRouter,createWebHistory } from "vue-router";
import HomeVue from "@/views/HomeVue.vue";
import AboutVue from "@/views/AboutVue.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeVue
        },
        {
            path: "/about",
            name: "about",
            component: AboutVue
        }
    ]
});

export default router