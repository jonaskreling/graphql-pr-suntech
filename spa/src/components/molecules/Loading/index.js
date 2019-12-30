import React from 'react'
import styled from 'styled-components'
import { switchProp } from 'styled-tools'
import PropTypes from 'prop-types'

import { Icon, Block, Label } from 'components'

const Wrapper = styled(Block)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const IconStyles = styled(Icon)`
  width: ${switchProp('size', { sm: '40px', md: '60px', lg: '80px' })};
  height: ${switchProp('size', { sm: '40px', md: '60px', lg: '80px' })};;

  animation-duration: 600ms;
  animation-name: rotationLoading;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes rotationLoading {
    from {
      width: ${switchProp('size', { sm: '40px', md: '60px', lg: '80px' })};
      height: ${switchProp('size', { sm: '40px', md: '60px', lg: '80px' })};
    }
  
    to {
      width: ${switchProp('size', { sm: '48px', md: '72px', lg: '96px' })};
      height: ${switchProp('size', { sm: '48px', md: '72px', lg: '96px' })};
    }
  }
`

const StyledLabel = styled(Label)`
  display: block;
  text-align: center;
  font-size: ${switchProp('size', { sm: '0.8rem', md: '1rem', lg: '1.2rem' })};
`

const StyledBlock = styled(Block)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${switchProp('size', { sm: '48px', md: '72px', lg: '96px' })};
  height: ${switchProp('size', { sm: '48px', md: '72px', lg: '96px' })};
`

const Loading = ({ size, label = '' }) => {
  return (
    <Wrapper>
      <StyledBlock size={size}>
        <IconStyles size={size} icon="webpack" />
      </StyledBlock>
      <StyledLabel size={size}>{ label }</StyledLabel>
    </Wrapper>
  )
}

Loading.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string.isRequired,
}

export default Loading
