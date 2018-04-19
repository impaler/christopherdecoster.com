import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ThemeDecorator } from '../../../../themes/storybook-decorator'

import { ButtonHref, LinkTarget } from '../index'

const stories = storiesOf('common/buttons/href', module)

stories.add('text', () =>
  <ButtonHref title={'title tip'} href={'#wowza'}>
    Lorem
  </ButtonHref>,
)
stories.add('title', () => <ButtonHref
  href={'#wowza'}
  title={'title tip'}
/>)
stories.add('empty', () => <ButtonHref href={'#wowza'} />)
stories.add('target', () =>
  <ButtonHref
    href={'#wowza'}
    title={'left mouse'}
    target={LinkTarget._top}
  >
    Click me
  </ButtonHref>
)
