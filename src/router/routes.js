
const routes = [
  {
    path: '*',
    redirect: '/about'
  },
  {
    path: '/about',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') }
    ]
  }
]

export default routes
