import * as React from 'react'
import { connect } from 'react-redux'

import { ThemeProvider } from 'styled-components'
import { RootState } from '../app/store/reducers'

export const ConnectThemeProvider = connect(
  (state: RootState) => ({
    theme: state.theme.data,
  }),
)(ThemeProvider)