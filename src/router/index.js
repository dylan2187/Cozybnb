import React from 'react'
import { Navigate } from 'react-router-dom'

// import Detail from '@/views/detail'
// import Entire from '@/views/entire'
// import Home from '@/views/home'
//通过React.lazy 和 Suspense 实现路由页面的懒加载： 有什么好处
const Home = React.lazy(() => import('@/views/home'))
const Detail = React.lazy(() => import('@/views/home'))
const Entire = React.lazy(() => import('@/views/entire'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: '/home',
    element: <Home></Home>,
  },
  {
    path: '/detail',
    element: <Detail></Detail>,
  },
  {
    path: '/entire',
    element: <Entire></Entire>,
  },
]

export default routes
