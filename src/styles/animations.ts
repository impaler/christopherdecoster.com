import {keyframes} from 'styled-components'

export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

export const predatorVision = keyframes`
  0%, 100% {
    filter: invert(0) saturate(90%) hue-rotate(0deg);
  }
  25% {
    filter: invert(10%) saturate(410%) hue-rotate(170deg);
  }
  50% {
    filter: invert(10%) saturate(300%) hue-rotate(290deg);
  }
  75% {
    filter: invert(0%) saturate(410%) hue-rotate(70deg);
  }
`
