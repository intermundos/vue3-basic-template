import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path:      '/',
        name:      'home',
        component: async () => await import('@ui/views/main.view.vue'),
        meta:      {
            classes: [ 'bg-pink-100 text-2xl' ]
        }
    },
    {
        path:      '/about',
        name:      'about',
        component: async () => await import('@ui/views/about.view.vue'),
        meta: {
            classes: ['bg-blue-100 text-2xl']
        }
    },
]

const router = createRouter( {
    history: createWebHistory(),
    routes,
} )

export { router }
