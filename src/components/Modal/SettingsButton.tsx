import * as React from 'react'

import { action_OpenSettings } from '../../app/store/overlays'
import { SettingsIcon } from '../../icons/icons'
import { ButtonDispatch, withDispatch } from '../Buttons/dispatch'
import { Button } from '../Buttons/base'

export const SettingsButton = () =>
  <ButtonDispatch
    action={action_OpenSettings()}
    title={'Open settings, change the site theme'}
  >
    <SettingsIcon/>
  </ButtonDispatch>

const TR = withDispatch(Button.extend`
  position: absolute;
  top: 0;
  right: 0;
`) as any

export const TopRightSettingsButton = props =>
  <TR
    action={action_OpenSettings()}
    title={'Open settings, change the site theme'}
  >
    <SettingsIcon/>
  </TR>