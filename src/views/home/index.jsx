import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSection4 from './c-cpns/home-section-4'
import HomeSectionWithBar from './c-cpns/home-section-with-tab'
import { isEmptyObj } from '@/utils'

const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
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
        {isEmptyObj(discountInfo) && (
          <HomeSectionWithBar infoData={discountInfo}></HomeSectionWithBar>
        )}
        <HomeSection4 infoData={goodPriceInfo}></HomeSection4>
        <HomeSection4 infoData={highScoreInfo}></HomeSection4>
      </div>
    </HomeWrapper>
  )
})

export default Home
