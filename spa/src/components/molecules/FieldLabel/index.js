import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Label } from 'components'
import { ifProp } from 'styled-tools'

const LabelStyled = styled(Label)`
  /*position: absolute;*/
  ${ifProp({ position: 'top' }, 'top: 0px;', 'top: 0px;')}
  left: 0px;
  vertical-align: middle;
  font-weight: 700;
  font-size: 14px;
  padding-left: 10px;
  transition: top 200ms ease, font-size 200ms ease;
  z-index: 1;
`

const FieldLabel = ({
  invalid, label, id, ...props
}) => {
  return (
    <LabelStyled htmlFor={id} invalid={invalid} { ...props }>
      {label}
    </LabelStyled>
  )
}

FieldLabel.propTypes = {
  invalid: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
}

export default FieldLabel
