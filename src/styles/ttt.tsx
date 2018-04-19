import * as React from 'react'

// my-component.ts

import { styped } from './styped'

const RedBox = styped<{ textColor?: string, wow: number }>()(
  styled =>
    styled.div`
      backgroud-color: red;
      color: ${props => props.textColor}
    `
)


const wow = () =>
  <RedBox textColor={'dd'} wow={3} />
