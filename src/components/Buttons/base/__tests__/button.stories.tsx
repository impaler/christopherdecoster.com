import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from '../index'

const stories = storiesOf('common/buttons/base', module)

stories.add('text', () =>
  <Button title={'title tip'}>
    Lorem
  </Button>,
)
stories.add('empty', () => <Button/>)
stories.add('title', () => <Button title={'title tip'}/>)
stories.add('onClick', () =>
  <Button
    title={'left mouse'}
    onClick={action('clicked')}
  >
    Click me
  </Button>
)
