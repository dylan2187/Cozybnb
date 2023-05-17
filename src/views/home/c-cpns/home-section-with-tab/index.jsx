import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionWrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'

const HomeSectionWithBar = memo((props) => {
  const { infoData } = props

  const initName = Object.keys(infoData.dest_list)[0]

  //传递给SectionTabs的函数，用来回收其中的点击事件
  const [name, setName] = useState(initName)

  //数据的转换
  const tabNames = infoData?.dest_address?.map((item) => item.name)
  const tabClickHandle = useCallback(function (index, name) {
    //通过name对传入的roomList做过滤
    setName(name)
  }, [])

  return (
    <SectionWrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}></SectionHeader>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
      <SectionRooms
        roomList={infoData.dest_list?.[name]}
        itemWidth="33.3%"></SectionRooms>
    </SectionWrapper>
  )
})

HomeSectionWithBar.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionWithBar
