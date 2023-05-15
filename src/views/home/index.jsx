import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'

const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
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
      <div className="good-price">
        <SectionHeader
          title={goodPriceInfo.title}
          subtitle={
            goodPriceInfo.subtitle ? goodPriceInfo.subtitle : '默认副标题'
          }></SectionHeader>
        <ul>
          {goodPriceInfo?.list?.map((item) => {
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
      </div>
    </HomeWrapper>
  )
})

export default Home
