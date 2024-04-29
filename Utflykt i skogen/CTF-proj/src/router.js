import { createRouter, createWebHistory } from 'vue-router' // Import createRouter and createWebHistory from 'vue-router'
import Home from './pages/Home.vue' // Import your components
import Tree from './pages/Tree.vue'
import Tree1 from './pages/Tree1.vue'
import Tree2 from './pages/Tree2.vue'
import Tree3 from './pages/Tree3.vue'
import Tree4 from './pages/Tree4.vue'
import Tree5 from './pages/Tree5.vue'
import Knapp from './pages/Knapp.vue'
import Tree7 from './pages/Tree7.vue'
import Tree8 from './pages/Tree8.vue'
import TheTree from './pages/TheTree.vue'
import Wrong from './pages/Wrong.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Tree',
        name: 'Tree',
        component: Tree
    },
    {
        path: '/Tree1',
        name: 'Tree1',
        component: Tree1
    },
    {
        path: '/Tree69',
        name: 'Tree2',
        component: Tree2
    },
    {
        path: '/Tree70',
        name: 'Tree3',
        component: Tree3
    },
    {
        path: '/Tree71',
        name: 'Tree4',
        component: Tree4
    },
    {
        path: '/Tree72',
        name: 'Tree5',
        component: Tree5
    },
    {
        path: '/Tree73',
        name: 'Knapp',
        component: Knapp
    },
    {
        path: '/Tree74',
        name: 'Tree7',
        component: Tree7
    },
    {
        path: '/Tree75',
        name: 'Tree8',
        component: Tree8
    },
    {
        path: '/Tree3',
        name: 'TheTree',
        component: TheTree
    },
    {
        path: '/Tree2',
        name: 'Wrong',
        component: Wrong
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
