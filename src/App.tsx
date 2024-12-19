import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { shallowEqual } from 'react-redux'
import { useAppSelector, useAppDispatch } from './store/index'
import { changeMessage } from '@/store/modules/counter'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    //浅层比较 防止更新其他State 刷新页面
    shallowEqual
  )
  const dispatch = useAppDispatch()
  const handleChanegeMessage = () => {
    dispatch(changeMessage('Hello World'))
  }
  return (
    <div className="App">
      <AppHeader />

      <Suspense fallback={<div>...</div>}>
        <div className="content">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
}

export default App
