import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-react-router'

import { PostFooter } from '../index'

const stories = storiesOf('routes/post:id/components/footer', module)
stories
  .addDecorator(StoryRouter())

stories.add('0', () => <PostFooter />)
