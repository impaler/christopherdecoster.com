import * as React from 'react'
import { fadeIn } from '../../styles/animations'
import styled from '../../styles/styled'
import { Typewriter } from './Typewriter'

export const TypeoutAnimation = styled(Typewriter)`
  max-width: 370px;
  padding: 20px;
  border: 2px solid rgba(66,65,65,.36);
  animation: ${fadeIn} 2s;
  background-color: ${props => props.theme.background.color};;
  color: ${props => props.theme.text.color};
`
