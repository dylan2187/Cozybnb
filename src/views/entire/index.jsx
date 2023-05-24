/*
 * @Date: 2023-05-14 23:47:36
 * @LastEditors: kai && neodylan@foxmail.com
 * @LastEditTime: 2023-05-24 22:55:20
 * @FilePath: /airbnb/src/views/entire/index.jsx
 * 此界面分为三部分： 过滤器， 房间列表， 分页器  封装成三个子组件
 */
import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire1/actionCreators'

const Entire = memo((props) => {
  //从redux中获取roomList数据
  const { roomList } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
    }),
    shallowEqual
  )

  // 发送异步网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])

  useEffect(() => {
    console.log(roomList)
  })

  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRooms roomList={roomList}></EntireRooms>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  )
})

Entire.propTypes = {}

export default Entire
