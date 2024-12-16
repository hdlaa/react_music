import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const DJradio: FC<IProps> = () => {
  return <div>DJradio</div>
}

export default memo(DJradio)
