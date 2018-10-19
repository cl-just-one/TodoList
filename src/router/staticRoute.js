const staticRoute = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: 'index' */ '../page/login')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default staticRoute
