import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import { useAppDispatch } from '@/store/index'
import { fetchBannerDataAction } from './store/recommend'
import TopBanner from './c-cpns/top-banner'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  return (
    <div>
      <TopBanner></TopBanner>
      Recommend
    </div>
  )
}

export default memo(Recommend)
