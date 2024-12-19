import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavBarWrapper } from './style'
import { discoverMenu } from '@/asssets/data/local-data'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

interface IItem {
  title: string
  link: string
}
const NavBar: FC<IProps> = () => {
  return (
    <NavBarWrapper>
      <div className="wrap-v1 nav">
        {discoverMenu.map((item: IItem) => {
          return (
            <div key={item.link} className="item">
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavBarWrapper>
  )
}

export default memo(NavBar)
