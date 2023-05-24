import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data'
import SectionTabs from '@/components/section-tabs'
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const tabNames = filterData.map((item) => item)
  const [selectItems, setSelectItems] = useState([])

  function itemClickHandle(index) {
    const newItems = [...selectItems]
    if (newItems.includes(index)) {
      //如果selectItems已有该项，则移除
      const itemIndex = newItems.findIndex((filterItem) => {
        return filterItem === index
      })
      console.log(itemIndex)
      newItems.splice(itemIndex, 1)
    } else {
      //添加
      newItems.push(index)
    }
    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              className={classNames('item', {
                active: selectItems.includes(index),
              })}
              key={item}
              onClick={(e) => itemClickHandle(index)}>
              {item}
            </div>
          )
        })}
      </div>
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter
