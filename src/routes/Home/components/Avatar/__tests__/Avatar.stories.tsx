import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-react-router'
import { AvatarProps, Avatar } from '../index'

const stories = storiesOf('routes/home/components/avatar', module)
stories.addDecorator(StoryRouter())

const props: AvatarProps ={
  to: '/'
}

stories.add('states', () =>
  <>
    <Avatar {...props} />
    <Avatar {...props} hoverState />
  </>
)
