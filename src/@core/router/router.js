import { createRouter, createWebHistory } from 'vue-router'

const defaultLayout = () => import('@ui/layouts/default.layout.vue')

const routes = [
    {
        path:      '/',
        component: defaultLayout,
        children:  [
            {
                path:      '',
                name:      'home',
                component: () => import('@ui/views/main.view.vue'),
                meta:      {
                    classes: [ 'bg-pink-100 text-2xl' ]
                }
            },
        ],

    },

    {
        path:      '/about',
        component: defaultLayout,
        children:  [
            {
                path:      '',
                name:      'about',
                component: () => import('@ui/views/about.view.vue'),
                meta:      {
                    classes: [ 'bg-blue-600 text-2xl' ]
                }
            },
        ],

    },

    //


]

const router = createRouter( {
    history: createWebHistory(),
    routes,
} )

export { router }
