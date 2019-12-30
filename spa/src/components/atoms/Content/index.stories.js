import React from 'react'
import { storiesOf } from '@storybook/react'
import { Content } from 'components'

storiesOf('Content', module)
  .add('default', () => (
    <Content>Teste</Content>
  ))
