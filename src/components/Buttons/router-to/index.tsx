import * as React from 'react'
import { Link } from 'react-router-dom'

import { CompStyled } from '../../../styles/styled'
import { Button, ButtonProps } from '../base'

export interface ButtonToProps extends ButtonProps {
  to: string
}

export const ButtonTo: CompStyled<ButtonToProps> = Button.withComponent(
  Link
).extend`
  text-decoration: none;
` as any
