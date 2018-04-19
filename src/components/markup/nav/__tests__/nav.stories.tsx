import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Nav } from '../index'

const stories = storiesOf('common/markup/nav', module)

stories.add('a links', () =>
  <Nav>
    <a href="#">Lorem</a>
    <a href="#">ipsum</a>
    <a href="#">sit</a>
    <a href="#">amet</a>
  </Nav>
)
