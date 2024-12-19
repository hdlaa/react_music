import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'
import classNames from 'classnames'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { useAppSelector, shallowEqualApp } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const banners = useAppSelector(
    (state) => state.recommend.banners,
    shallowEqualApp
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const handlePrve = () => {
    bannerRef?.current?.prev()
  }
  const handleNext = () => {
    bannerRef?.current?.next()
  }
  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
    bannerRef?.current?.goTo(index)
  }

  let bgImage
  if (currentIndex >= 0 && banners[currentIndex]) {
    bgImage = banners[currentIndex]?.imageUrl + '?imageView&blur=40x20'
  }
  return (
    <BannerWrapper
      style={{ background: `url(${bgImage}) center center / 6000px` }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            dotPosition={'bottom'}
            autoplaySpeed={3000}
            autoplay
            dots={false}
            effect={'fade'}
            ref={bannerRef}
            afterChange={(current) => {
              setCurrentIndex(current)
            }}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className={'image'} src={item.imageUrl} alt="" />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li
                  key={item.imageUrl}
                  onClick={() => {
                    handleDotClick(index)
                  }}
                >
                  <span
                    className={classNames('item', {
                      active: currentIndex === index
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="left btn" onClick={handlePrve}></button>
          <button className="right btn" onClick={handleNext}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
