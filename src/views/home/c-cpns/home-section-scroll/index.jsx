import React, { memo } from 'react'
import { SectionWrapper } from './style'

import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'

import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'

const HomeSectionScroll = memo((props) => {
  const { infoData } = props
  return (
    <SectionWrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}></SectionHeader>
      <div className="room-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return (
              <RoomItem
                itemData={item}
                key={item.id}
                itemWidth={'25%'}></RoomItem>
            )
          })}
        </ScrollView>
      </div>
    </SectionWrapper>
  )
})

HomeSectionScroll.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionScroll
