import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Content, Loading } from 'components'

const StyledContent = styled(Content)`
  height: calc(100vh - 65px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoadingComplete = ({ size, label }) => {
  return (
    <StyledContent>
      <Loading label={label} size={size} />
    </StyledContent>
  )
}

LoadingComplete.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
}

LoadingComplete.defaultProps = {
  label: '',
  size: 'md',
}

export default LoadingComplete
