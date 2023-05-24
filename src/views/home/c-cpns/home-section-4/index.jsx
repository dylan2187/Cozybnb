/*
 * @Date: 2023-05-16 10:29:00
 * @LastEditors: kai && neodylan@foxmail.com
 * @LastEditTime: 2023-05-24 15:57:21
 * @FilePath: /airbnb/src/views/home/c-cpns/home-section-4/index.jsx
 * 有4列（也可以是3列，修改itemWidth）item的section组件（包括header rooms footer）（不带选项卡和横向滚动组件）
 */
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapper } from './style'
import SectionFooter from '@/components/section-footer'

const HomeSection4 = memo((props) => {
  const { infoData, itemWidth = '25%' } = props
  return (
    <SectionWrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}></SectionHeader>
      <SectionRooms
        roomList={infoData.list}
        itemWidth={itemWidth}></SectionRooms>
      <SectionFooter></SectionFooter>
    </SectionWrapper>
  )
})

HomeSection4.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSection4
