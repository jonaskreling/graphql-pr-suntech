import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`

const Div = (props) => {
  const { children } = props
  return (
    <Wrapper {...props}>
      { children }
    </Wrapper>
  )
}

Div.propTypes = {
  children: PropTypes.node,
}

export default Div
