export const constantRouter = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', //权限用
    meta: {
      title: '登录',
      hidden: true,
      icon: 'Home',
    },
  },
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    name: 'layout', //权限用
    meta: {
      title: '布局',
      hidden: false,
      icon: 'Grid',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '主页',
          hidden: false,
          icon: 'House',
        },
      },
    ],
  },
  {
    path: '/acl',
    component: () => import('@/views/layout/index.vue'),
    name: 'Acl', //权限用
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Lock',
    },
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'User',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
    ],
  },
  {
    path: '/product',
    component: () => import('@/views/layout/index.vue'),
    name: 'Product', //权限用
    meta: {
      title: '商品管理',
      hidden: false,
      icon: 'Goods',
    },
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'TradeMark',
        meta: {
          title: '品牌管理',
          hidden: false,
          icon: 'ShoppingCartFull',
        },
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        name: 'Attr',
        meta: {
          title: '属性管理',
          hidden: false,
          icon: 'ChromeFilled',
        },
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/index.vue'),
        name: 'Sku',
        meta: {
          title: 'Sku管理',
          hidden: false,
          icon: 'Orange',
        },
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/index.vue'),
        name: 'Spu',
        meta: {
          title: 'Spu管理',
          hidden: false,
          icon: 'Calendar',
        },
      },
    ],
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'screen', //权限用
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'QuestionFilled',
    },
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404', //权限用
    meta: {
      title: '404',
      hidden: true,
      icon: 'QuestionFilled',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any', //权限用
    meta: {
      title: '任意路由',
      hidden: true,
      icon: 'Menu',
    },
  },
]
