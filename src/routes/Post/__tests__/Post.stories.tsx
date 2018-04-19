import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-react-router'

import { PostProps, Post } from '../Post'

const stories = storiesOf('routes/post:id', module)
  .addDecorator(StoryRouter())

const { html, meta } = require('./debugging-fp-js.json')

const props: PostProps = {
  html, meta
}

stories.add('/', () => <Post {...props} />)
