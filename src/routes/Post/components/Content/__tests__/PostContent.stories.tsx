import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-react-router'

import { PostContent, PostContentProps } from '../index'

const stories = storiesOf('routes/post:id/components/content', module)
stories
  .addDecorator(StoryRouter())

const props: PostContentProps = {
  html: require('../../../__tests__/debugging-fp-js.json').html
}

stories.add('0', () => <PostContent {...props} />)
