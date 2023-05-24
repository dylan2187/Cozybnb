import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { EntireWrapper } from './style'

const Entire = memo((props) => {
  return (
    <EntireWrapper>
      <div className="filter">filter-section</div>
      <div className="rooms">room-section</div>
      <div className="pagination">pagination</div>
    </EntireWrapper>
  )
})

Entire.propTypes = {}

export default Entire
