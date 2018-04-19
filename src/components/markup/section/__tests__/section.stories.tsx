import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Section } from '../index'

const stories = storiesOf('common/markup/section', module)

stories.add('element', () => (
  <Section>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Section>
))

stories.add('many', () => [
  <Section>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Section>,
  <Section>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum.
  </Section>,
  <Section>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Section>,
])
