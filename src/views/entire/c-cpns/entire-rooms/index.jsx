import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'

const EntireRooms = memo((props) => {
  const { roomList = [] } = props
  return (
    <RoomsWrapper>
      {roomList.map((item) => {
        return (
          <RoomItem itemData={item} itemWidth={'20%'} key={item.id}></RoomItem>
        )
      })}
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {
  roomList: PropTypes.array,
}

export default EntireRooms
