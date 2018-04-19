import { set, lensProp, compose } from 'ramda'
import { Action } from './store'

export interface OverlaysState
{
  settings: null | true
}

export const initialOverlaysState: OverlaysState = {
  settings: null,
}

export const OPEN_SETTINGS = 'OPEN_SETTINGS'
export const CLOSE_SETTINGS = 'CLOSE_SETTINGS'

export const action_OpenSettings = (): Action => {
  return {
    type: OPEN_SETTINGS,
    payload: {},
  }
}

export const action_CloseSettings = (): Action => {
  return {
    type: CLOSE_SETTINGS,
    payload: {},
  }
}

export function overlaysReducer (
  state: OverlaysState = initialOverlaysState,
  action: Action,
)
{
  if (action.type === OPEN_SETTINGS || action.type === CLOSE_SETTINGS) {
    const openState = action.type === OPEN_SETTINGS ? true : null
    return set(
      lensProp('settings'),
      openState,
      state,
    )
  }
  return state
}
