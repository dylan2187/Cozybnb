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

const Home = memo(() => {
  // 从redux中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendInfo,
    longforInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longforInfo: state.home.longforInfo,
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
        {/* 向往城市 */}
        {isEmptyObj(longforInfo) && (
          <HomeLongfor infoData={longforInfo}></HomeLongfor>
        )}
        {/* 折扣优惠 */}
        {isEmptyObj(discountInfo) && (
          <HomeSectionWithBar infoData={discountInfo}></HomeSectionWithBar>
        )}
        {/* 热门推荐 */}
        {isEmptyObj(hotRecommendInfo) && (
          <HomeSectionWithBar infoData={hotRecommendInfo}></HomeSectionWithBar>
        )}
        {/* 高性价比 */}
        <HomeSection4 infoData={goodPriceInfo} itemWidth={'25%'}></HomeSection4>
        {/* 高分房源 */}
        <HomeSection4 infoData={highScoreInfo} itemWidth={'25%'}></HomeSection4>
      </div>
    </HomeWrapper>
  )
})

export default Home
