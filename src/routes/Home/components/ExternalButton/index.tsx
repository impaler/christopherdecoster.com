import * as React from 'react'

import styled, { CompStyled, CompProps, hoverState, CompSFC } from '../../../../styles/styled'

export interface ExternalButtonProps extends CompProps
{
  href: string
  iconSrc: string
  title?: string
}

const ExternalButtonComp: CompSFC<ExternalButtonProps> = props =>
  <a href={props.href} className={props.className}>
    <img src={props.iconSrc}/>
  </a>

export const ExternalButton = styled(ExternalButtonComp)`
    display: flex;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin: 4px;
    border-radius: 10px;
    background-color: ${props => props.theme.background.tertiaryColor};
    border: 1px solid ${props => props.theme.border.color};

    ${hoverState} {
      background-color: ${props => props.theme.background.hoverColor};
      transform: scale(1.05);
    }
`
