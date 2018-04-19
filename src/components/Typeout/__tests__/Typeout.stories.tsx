import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { TypeoutAnimation } from '../index'

const stories = storiesOf('common/typeout', module)

stories.add('paragraph', () =>
  <>
    <TypeoutAnimation>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </TypeoutAnimation>
    <TypeoutAnimation>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </TypeoutAnimation>
  </>
)
