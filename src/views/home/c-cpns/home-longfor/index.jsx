/*
 * @Date: 2023-05-24 13:46:43
 * @LastEditors: kai && neodylan@foxmail.com
 * @LastEditTime: 2023-05-24 14:58:51
 * @FilePath: /airbnb/src/views/home/c-cpns/home-longfor/index.jsx
 * 用于封装home中的向往城市模块 longfor
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongfor = memo((props) => {
  const { infoData } = props
  return (
    <LongforWrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}></SectionHeader>
      <div className="content">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongforItem itemData={item} key={item.city}></LongforItem>
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object,
}

export default HomeLongfor
