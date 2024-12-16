import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from '@/router'
import { useSelector, shallowEqual } from 'react-redux'
import { useAppSelector, useAppDispatch } from './store/index'
import { changeMessage } from '@/store/modules/counter'

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
      <div className="nav">
        <Link to={'./discover'}>发现音乐</Link>
        <Link to={'./mine'}>我的音乐</Link>
        <Link to={'./focus'}>关注</Link>
        <Link to={'./download'}>下载客户端</Link>
      </div>
      <div>
        {count} - {message}
      </div>
      <button onClick={handleChanegeMessage}>改变message</button>
      <Suspense fallback={<div>...</div>}>
        <div className="content">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
