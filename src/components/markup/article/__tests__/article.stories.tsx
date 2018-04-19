import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Article } from '../index'

const stories = storiesOf('common/markup/article', module)

stories.add('element', () => (
  <Article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Article>
))

stories.add('many', () => [
  <Article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Article>,
  <Article>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</Article>,
  <Article>Sunt in culpa qui officia deserunt mollit anim id est laborum.</Article>,
  <Article>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum.
  </Article>
])
