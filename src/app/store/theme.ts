import { set, lensProp, compose } from 'ramda'
import { Theme } from '../../themes'
import { darkTheme } from '../../themes/dark'
import { lightTheme } from '../../themes/light'
import { Action } from './store'

export interface ThemeState
{
  current: string
  data: Theme
}

const initialThemeState: ThemeState = {
  current: 'dark',
  data: darkTheme,
}

const SET_THEME = 'set-theme'

const themes = {
  ['dark']: darkTheme,
  ['light']: lightTheme,
}

export const action_SetTheme = (name: string): Action<{name: string}> => {
  return {
    type: SET_THEME,
    payload: {
      name,
    },
  }
}

export function themeReducer (state: ThemeState = initialThemeState, action) {
  if (action.type === SET_THEME) {
    const { name } = action.payload
    const themeToSet = themes[name]
    if (themeToSet) {
      console.log('setting theme', name)
      return compose(
        set(lensProp('data'), themeToSet),
        set(lensProp('current'), name),
      )(state)
    }
  }
  return state
}
