import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-react-router'

import { ButtonTo } from '../index'

const stories = storiesOf('common/buttons/router-to', module)
stories
  .addDecorator(StoryRouter())

stories.add('text', () =>
  <ButtonTo title={'title tip'} to={'/about'}>
    Lorem
  </ButtonTo>,
)
stories.add('empty', () => <ButtonTo to={'/about'}/>)
stories.add('title', () => <ButtonTo
  to={'/about'}
  title={'title tip'}
/>)
