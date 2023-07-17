export const constantRouter = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', //权限用
  },
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'layout', //权限用
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404', //权限用
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any', //权限用
  },
]
