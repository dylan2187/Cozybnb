import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo((props) => {
  const { roomList = [] } = props
  console.log('props', props)
  return (
    <RoomsWrapper>
      {roomList?.slice(0, 8).map((item) => {
        return <RoomItem itemData={item} key={item.id}></RoomItem>
      })}
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array,
}

export default SectionRooms
