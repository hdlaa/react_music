import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div className="nav">
        <Link to={'./recommend'}>推荐</Link>
        <Link to={'./ranking'}>排行榜</Link>
        <Link to={'./songs'}>歌单</Link>
        <Link to={'./djradio'}>主播电台</Link>
        <Link to={'./artist'}>歌手</Link>
        <Link to={'./album'}>新歌上架</Link>
      </div>
      <Suspense fallback={<div>...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
