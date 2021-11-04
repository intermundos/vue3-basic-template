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
          // classes: [ 'bg-pink-100 text-2xl' ]
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
        meta:      {}
      },
    ],

  },

  // 404
  {
    path:      '/:pathMatch(.*)*',
    name:      'not-found',
    component: () => import('@ui/views/service-views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export { router }
