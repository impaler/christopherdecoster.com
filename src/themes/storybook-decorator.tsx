import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { initialAppState } from '../app/store/reducers'
import { GlobalStyles } from '../styles/global-styles'
import { darkTheme } from './dark'

// https://storybook.js.org/addons/introduction/#storybook-decorators
export const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={darkTheme}>
    { storyFn() }
  </ThemeProvider>
)

export const GlobalStylesDecorator = (storyFn) => (
  <>
    <GlobalStyles theme={darkTheme} />
    { storyFn() }
  </>
)

import { action } from '@storybook/addon-actions'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const actionReducer = (state = {}, reduxAction) => {
  console.log(reduxAction)
  return state
}

const store = createStore(actionReducer, initialAppState)

export function StoreDecorator(storyFn) {
  return <Provider store={store}>
    { storyFn() }
  </Provider>
}
