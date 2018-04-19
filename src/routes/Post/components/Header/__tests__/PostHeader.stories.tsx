import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-react-router'

import { PostHeader, PostHeaderProps } from '../index'

const stories = storiesOf('routes/post:id/components/header', module)
stories
  .addDecorator(StoryRouter())

const props: PostHeaderProps = {
  meta: {
    title: 'Debugging Functional Javascript',
    layout: 'Post',
    tagline: 'Working through errors and stacktraces to debug functional style javascript',
    tags: ['fp', 'js', 'debugging']
  },
}

stories.add('0', () => <PostHeader {...props} />)
