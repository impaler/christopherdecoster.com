import * as React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

import { Post } from '../../../routes/Post/Post'
import { StoreDecorator } from '../../../themes/storybook-decorator'
import { Modal } from '../Modal'

const stories = storiesOf('common/modals', module)
  .addDecorator(StoreDecorator)
  .addDecorator(StoryRouter())

const post = require('./debugging-fp-js.json')

stories.add('theme', () =>
  <>
    <Modal />
    <Post {...post} />
  </>
)
