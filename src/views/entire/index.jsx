/*
 * @Date: 2023-05-14 23:47:36
 * @LastEditors: kai && neodylan@foxmail.com
 * @LastEditTime: 2023-05-24 22:13:31
 * @FilePath: /airbnb/src/views/entire/index.jsx
 * 此界面分为三部分： 过滤器， 房间列表， 分页器  封装成三个子组件
 */
import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const Entire = memo((props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])
  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  )
})

Entire.propTypes = {}

export default Entire
