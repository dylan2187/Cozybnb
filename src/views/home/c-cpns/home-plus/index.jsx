import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PlusWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const HomePlus = memo((props) => {
  const { infoData } = props
  return (
    <PlusWrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}></SectionHeader>
      <ScrollView>
        <SectionRooms roomList={infoData.list} itemWidth={'20%'}></SectionRooms>
      </ScrollView>
    </PlusWrapper>
  )
})

HomePlus.propTypes = {
  infoData: PropTypes.object,
}

export default HomePlus
