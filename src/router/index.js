import {createRouter, createWebHistory} from 'vue-router'
import Tasks from "@/views/Tasks";
import New from "@/views/New";
import Task from "@/views/Task";

const routes = [
    {
        path: '/',
        component: Tasks
    },
    {
        path: '/task/:taskId?',
        component: Task
    },
    {
        path: '/new',
        component: New
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

export default router
