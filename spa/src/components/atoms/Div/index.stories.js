import React from 'react'
import { storiesOf } from '@storybook/react'
import Div from '.'

storiesOf('Div', module)
  .add('default', () => (
    <Div>Atomo div.</Div>
  ))
