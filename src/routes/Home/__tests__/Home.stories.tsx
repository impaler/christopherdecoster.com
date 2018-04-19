import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-react-router'
import { StoreDecorator } from '../../../themes/storybook-decorator'

import { Home, HomeProps } from '../Home'

const stories = storiesOf('routes/home', module)
  .addDecorator(StoryRouter())

const props: HomeProps ={
  links: {
    github: '#',
    twitter: '#',
  }
}

stories.add('/', () => <Home {...props} />)
