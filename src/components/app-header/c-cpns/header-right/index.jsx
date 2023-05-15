import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  // 定义组件内部的状态
  const [showPannel, setShowPannel] = useState(false)

  // 副作用代码
  useEffect(() => {
    function windowHandleClick() {
      setShowPannel(false)
    }
    //加第三个参数为事件捕获
    window.addEventListener('click', windowHandleClick, true)

    // return的函数在组件卸载时执行，目的是取消监听
    return () => {
      window.removeEventListener('click', windowHandleClick)
    }
  }, [])

  // 事件处理函数
  function profileClickHandle() {
    setShowPannel(true)
  }
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
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
        {showPannel && (
          <div className="pannel">
            {/* //点击profile出现/隐藏的面板 */}
            <div className="top">
              <div className="item">注册</div>
              <div className="item">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
