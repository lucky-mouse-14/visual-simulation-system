export const basicRoutes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      title: '页面飞走了',
    },
  },
  {
    name: 'Design',
    path: '/design',
    component: () => import('@/views/design/index.vue'),
    meta: {
      title: '系统设计',
    },
  },
]
