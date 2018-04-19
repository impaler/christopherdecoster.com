import * as React from 'react'
import styled, { keyframes } from 'styled-components'

import { Typewriter, TypewriterProps } from './Typewriter'

export const blink = keyframes`
  50% {
    color: transparent;
  }
`

export const TypewriterBlinking = styled<TypewriterProps>(Typewriter)`
  display: inline;
  span {
    animation: ${blink} 0.5s steps(1) infinite;
  }
`
