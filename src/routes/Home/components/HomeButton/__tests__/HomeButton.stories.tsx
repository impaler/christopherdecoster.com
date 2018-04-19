import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-react-router'

import { HomeButton, HomeButtonProps } from '../'

const stories = storiesOf('routes/home/components/home-button', module)
stories
  .addDecorator(StoryRouter())

const props: HomeButtonProps = {
  title: 'Blog',
  to: '/blog',
  children: 'Blog'
}

stories
  .add('states',
    () =>
      <>
        <HomeButton {...props} />
        <HomeButton {...props} hover />
        <HomeButton {...props} active />
      </>)
