import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapper } from './style'

const HomeSection4 = memo((props) => {
  const { infoData } = props
  return (
    <SectionWrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}></SectionHeader>
      <SectionRooms roomList={infoData.list}></SectionRooms>
    </SectionWrapper>
  )
})

HomeSection4.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSection4
