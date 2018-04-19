import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-react-router'

import { Posts, PostsProps } from '../Posts'

const stories = storiesOf('routes/posts', module)
  .addDecorator(StoryRouter())

const props: PostsProps = {
  posts: Object.values(require('./index.json'))
}

stories.add('/', () => <Posts {...props} />)
