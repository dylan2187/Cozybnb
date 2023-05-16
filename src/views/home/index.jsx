import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSection4 from './c-cpns/home-section-4'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

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
        <HomeSection4 infoData={goodPriceInfo}></HomeSection4>
        <HomeSection4 infoData={highScoreInfo}></HomeSection4>
        <div className="discount">
          <SectionHeader
            title={discountInfo.title}
            subtitle={discountInfo.subtitle}></SectionHeader>
          <SectionRooms
            roomList={discountInfo.dest_list?.['成都']}
            itemWidth="33.3%"></SectionRooms>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
