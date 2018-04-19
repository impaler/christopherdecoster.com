import * as React from 'react'
import { injectGlobal, withTheme } from 'styled-components'

import { Theme } from '../themes'
import { codeStyle } from './code'
import { scrollBarStyle } from './scrollbar'

export const injectGlobalStyles = () => {
  injectGlobal`
    * {
      margin: 0;
      padding: 0;
      box-sizing:  border-box;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 18px;
      line-height: 26px;
    }

   ${scrollBarStyle()}
    
    ${codeStyle}
  `
}

// styled-components does not have a global api
// todo follow up on this proposal
// https://github.com/styled-components/styled-components/pull/1493

// todo remove this hack when global api is available
export const GlobalStyles = withTheme((props: {theme: Theme}) => {
  injectGlobalStyles()
  return <style type="text/css">
    {'html {'}
      {'background:'}{props.theme.background.color}{';'}
      {'color:'}{props.theme.text.color}{';'}
    {'}'}
  </style>
})