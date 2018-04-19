import { ReactNode } from 'react'
import * as styledComponents from 'styled-components'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>

export interface CompProps<T=Theme>
{
  theme?: T
  key?: number | string
  className?: string
  children?: ReactNode
  hoverState?: boolean // css state helper `hoverState`
  activeState?: boolean // css state helper `activeState`
}
import { StyledComponentClass } from 'styled-components'

// For now types are hacky and end with cast to any.
// Waiting for a general solution to follow for literals
// - https://github.com/Microsoft/TypeScript/pull/23430
// - discussion https://github.com/styled-components/styled-components/issues/630
// borrowed from from https://github.com/jacob-ebey/styled-components-ts/blob/master/src/styled-components-ts.ts
// eg: styledEl(styled.p)` ...css `
export type CompStyled<Props extends Partial<CompProps<T>> = Partial<CompProps<T>>, T=Theme> = StyledComponentClass<Props, T>
export type CompSFC<Props extends Partial<CompProps<T>> = Partial<CompProps<T>>, T=Theme> = React.SFC<Props>

export default styled

export { css, injectGlobal, keyframes, ThemeProvider }

import { ThemedStyledFunction } from 'styled-components'
import { Theme } from '../themes'

export const styledEl =
  <TProps, U extends HTMLElement = HTMLElement>
  (
    styledFunction: ThemedStyledFunction<any, any>,
  ): ThemedStyledFunction<TProps & React.HTMLProps<U>, any> => {
    return styledFunction
  }

// styled css helpers for visual testing states
export const hoverState = props => props.hoverState ? '' : '&:hover'
export const activeState = props => props.active ? '' : '&:active'
