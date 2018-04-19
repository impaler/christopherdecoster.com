import { combineReducers, Reducer } from 'redux'
import { routerReducer, RouterState } from 'react-router-redux'
import { darkTheme } from '../../themes/dark'
import { lightTheme } from '../../themes/light'
import { OverlaysState, overlaysReducer, initialOverlaysState } from './overlays'
import { ThemeState, themeReducer } from './theme'

export interface RootState {
  router: RouterState
  theme: ThemeState
  overlays: OverlaysState
}

export const initialAppState: RootState = {
  theme: {
    current: 'dark',
    data: darkTheme
  },
  router: {
    location: null
  },
  overlays: initialOverlaysState
}

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  router: routerReducer,
  theme: themeReducer,
  overlays: overlaysReducer,
})
