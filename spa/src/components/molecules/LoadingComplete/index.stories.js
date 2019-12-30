import React from 'react'
import { storiesOf } from '@storybook/react'
import { Loading } from 'components'

storiesOf('Loading', module)
  .add('Small', () => (
    <Loading label="Carregando" size="sm" />
  ))
  .add('default', () => (
    <Loading label="Carregando" size="md" />
  ))
  .add('Large', () => (
    <Loading label="Carregando" size="lg" />
  ))
  .add('Without Label', () => (
    <Loading size="lg" />
  ))
