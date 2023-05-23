import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FootWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import theme from '@/assets/theme'

const SectionFooter = memo((props) => {
  const { name } = props

  let showName = '显示全部'
  if (name) showName = `显示更多${name}房源`
  return (
    <FootWrapper color={name ? theme.color.secondaryColor : '#000'}>
      <div className="info">
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
