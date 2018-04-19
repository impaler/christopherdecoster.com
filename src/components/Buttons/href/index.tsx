import * as React from 'react'
import { StyledComponentClass } from 'styled-components'
import { CompStyled } from '../../../styles/styled'

import { Button, ButtonProps } from '../base'

export interface ButtonHrefProps extends ButtonProps
{
  href: string
  target?: LinkTarget
}

export enum LinkTarget
{
  _self = '_self', // Load the URL into the same browsing context as the current one. This is the default behavior.
  _blank = '_blank', // Load the URL into a new browsing context. This is usually a tab, but users can configure browsers to use new windows instead.
  _parent = '_parent', // Load the URL into the parent browsing context of the current one. If there is no parent, this behaves the same way as _self.
  _top = '_top', // Load the URL into the top-level browsing context (that is, the "highest" browsing context that is an ancestor of the current one, and has no parent)
}

export const ButtonHref: CompStyled<ButtonHrefProps> = Button.withComponent('a').extend`
  text-decoration: none;
` as any
