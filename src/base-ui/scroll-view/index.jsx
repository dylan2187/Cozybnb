import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  // 定义内部的状态
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)

  const [posIndex, setPosIndex] = useState(0)
  const totalDistanceRef = useRef() //在组件多次渲染的时候保持一样的值，因为只需要记录totalDistance，不需要在totalDistance改变的时候重新渲染组件

  // 组件渲染完毕，判断是否显示右侧的按钮
  // 判断的思路：获取scroll-content一共可滚动的宽度和本身占据的宽度，就能只能还能不能往右滚
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  // 事件处理的逻辑
  function controlClickHandle(direction) {
    const newIndex = direction === 'R' ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newElOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`
    setPosIndex(newIndex)
    setShowRight(totalDistanceRef.current > newElOffsetLeft) //可滚动的宽度 是否大于当前item的偏移量，大于的话可以滚，否则不能滚动

    setShowLeft(newElOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className="control left" onClick={(e) => controlClickHandle('L')}>
          <IconArrowLeft></IconArrowLeft>
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={(e) => controlClickHandle('R')}>
          <IconArrowRight></IconArrowRight>
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView
