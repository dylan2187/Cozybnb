import PropTypes from 'prop-types'

import React, { memo, useState } from 'react'

import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleItemClick(index, item) {
    //点击item后，currentIndex改为当前item的index
    setCurrentIndex(index)
    tabClick(index, item)
  }

  //同时需要把内部点击的事件传递到父组件，再由父组件来决定传递的tabNames
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              className={classNames('item', { active: index === currentIndex })}
              key={index}
              onClick={(e) => handleItemClick(index, item)}>
              {item}
            </div>
          )
        })}
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
}

export default SectionTabs
