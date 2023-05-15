/*
 * @Date: 2023-05-15 20:48:43
 * @LastEditors: kai && neodylan@foxmail.com
 * @LastEditTime: 2023-05-15 23:07:11
 * @FilePath: /airbnb/src/components/room-item/index.jsx
 * 用于封装每一个房间的item
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Rating } from '@mui/material'

import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
  const { itemData } = props
  return (
    <ItemWrapper verifycolor={itemData?.verify_info?.text_color || '#39576a'}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join('·')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            defaultValue={2.5}
            precision={0.1}
            readOnly
            sx={{
              fontSize: '12px',
              color: `${itemData.star_rating_color}`,
              marginRight: '-1px',
            }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
}

export default RoomItem
