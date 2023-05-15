import React, { memo } from 'react'
import '@/assets/css/index.less'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
const App = memo(() => {
  return (
    <div>
      <AppHeader></AppHeader>
      <div className="content">{useRoutes(routes)}</div>
      <AppFooter></AppFooter>
    </div>
  )
})

export default App
