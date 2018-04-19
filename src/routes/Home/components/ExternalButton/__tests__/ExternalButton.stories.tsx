import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-react-router'

import { ExternalButton } from '../'

const stories = storiesOf('routes/home/components/external-button', module)
stories
  .addDecorator(StoryRouter())

stories.add('states', () =>
  <>
    <ExternalButton
      href={'#'}
      iconSrc={'/assets/images/twitter-icon.svg'}
      title={'See me tweet about interesting stuff'}
    />
    <ExternalButton
      href={'#'}
      iconSrc={'/assets/images/twitter-icon.svg'}
      title={'See me tweet about interesting stuff'}
      hoverState
    />
  </>)
