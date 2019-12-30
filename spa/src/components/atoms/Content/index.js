import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { prop } from 'styled-tools'
import { Div } from 'components'

const Wrapper = styled(props => <Div {...props} />)`
  padding: ${prop('padding', '20px')};
  height: auto;

  @media screen and (max-width: 640px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  .ant-tabs-nav .ant-tabs-tab-active {
    color: #00604e;
    font-weight: 500;
    font-weight: bold;
  }

  .ant-tabs-ink-bar {
    background-color: #00604e;
  }

  .ant-tabs-nav .ant-tabs-tab:hover {
    color: #00604e;
  }

  .ant-tabs-nav-container {
    color:#444444;
    font-size: 18px;
    font-weight: bold;
  }

  .ant-tabs-bar {
    margin: 0 0 0 0;
    border-bottom: none;
  }

  .ant-tabs-content {
    padding-top: 10px;
  }
`

const Content = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      { children }
    </Wrapper>
  )
}

Content.propTypes = {
  padding: PropTypes.string,
  children: PropTypes.node,
}

export default Content
