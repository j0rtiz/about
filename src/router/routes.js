
const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') }
    ]
  }
]

export default routes
