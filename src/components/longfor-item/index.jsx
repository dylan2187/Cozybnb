/*
 * @Date: 2023-05-24 14:00:03
 * @LastEditors: kai && neodylan@foxmail.com
 * @LastEditTime: 2023-05-24 14:51:53
 * @FilePath: /airbnb/src/components/longfor-item/index.jsx
 * 用于封装longfer的item，包括：城市名称city 价格price 图片picture_url
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const LongforItem = memo((props) => {
  const { itemData } = props
  return (
    <ItemWrapper>
      <div className="inner">
        <div className="item-info">
          <img className="cover" src={itemData.picture_url} alt="" />
          {/* 阴影遮盖 */}
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{itemData.city}</div>
            <div className="price">均价{itemData.price}</div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  )
})

LongforItem.propTypes = {
  itemData: PropTypes.object,
}

export default LongforItem
