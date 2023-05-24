import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { Skeleton } from '@mui/material'

import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSection4 from './c-cpns/home-section-4'
import HomeSectionWithBar from './c-cpns/home-section-with-tab'
import { isEmptyObj } from '@/utils'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionScroll from './c-cpns/home-section-scroll'

const Home = memo(() => {
  // 从redux中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  )

  // 派发异步事件：发送网络请求，将请求的数据保存到redux store
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣优惠 */}
        {isEmptyObj(discountInfo) && (
          <HomeSectionWithBar infoData={discountInfo}></HomeSectionWithBar>
        )}
        {/* 热门推荐 */}
        {isEmptyObj(hotRecommendInfo) && (
          <HomeSectionWithBar infoData={hotRecommendInfo}></HomeSectionWithBar>
        )}
        {/* 向往城市 */}
        {isEmptyObj(longforInfo) && (
          <HomeLongfor infoData={longforInfo}></HomeLongfor>
        )}
        {/* plus房源 */}
        {isEmptyObj(plusInfo) && (
          <HomeSectionScroll infoData={plusInfo}></HomeSectionScroll>
        )}

        {/* 高性价比 */}
        {isEmptyObj(goodPriceInfo) && (
          <HomeSection4
            infoData={goodPriceInfo}
            itemWidth={'25%'}></HomeSection4>
        )}
        {/* 高分房源 */}
        {isEmptyObj(highScoreInfo) && (
          <HomeSection4
            infoData={highScoreInfo}
            itemWidth={'25%'}></HomeSection4>
        )}
      </div>
    </HomeWrapper>
  )
})

export default Home
