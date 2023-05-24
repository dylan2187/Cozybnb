import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FootWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import theme from '@/assets/theme'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const { name } = props

  let showName = '显示全部'
  if (name) showName = `显示更多${name}房源`

  // 事件处理的逻辑
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate('/entire')
  }
  return (
    <FootWrapper color={name ? theme.color.secondaryColor : '#000'}>
      <div className="info" onClick={moreClickHandle}>
        <div className="text">{showName}</div>
        <IconMoreArrow></IconMoreArrow>
      </div>
    </FootWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string,
}

export default SectionFooter
