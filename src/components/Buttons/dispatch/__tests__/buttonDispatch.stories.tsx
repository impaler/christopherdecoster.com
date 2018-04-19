import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { StoreDecorator, ThemeDecorator } from '../../../../themes/storybook-decorator'
import { ButtonDispatch } from '../index'

const stories = storiesOf('common/buttons/dispatch', module)
stories
  .addDecorator(StoreDecorator)

stories.add('text', () =>
  <ButtonDispatch
    title={'title tip'}
    action={{
      type: 'shit yeah',
      payload: {sdsd:'ss'}
    }}
  >
    Dispatch
  </ButtonDispatch>,
)
