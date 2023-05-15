import React, { memo } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <div className="btns">
        <div className="btn">
          <span>登录</span>
        </div>
        <div className="btn">
          <span>注册</span>
        </div>
        <div className="btn">
          <span>
            <IconGlobal />
          </span>
        </div>
      </div>
      <div className="profile">
        <IconMenu />
        <IconAvatar />
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
