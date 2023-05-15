import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'

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
      <h2>{goodPriceInfo.title}</h2>
      <HomeBanner />
    </HomeWrapper>
  )
})

export default Home
