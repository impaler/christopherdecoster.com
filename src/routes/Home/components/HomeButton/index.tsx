import * as React from 'react'
import { Link } from 'react-router-dom'

import styled, { activeState, CompStyled, CompProps, hoverState, CompSFC } from '../../../../styles/styled'

export interface HomeButtonProps extends CompProps
{
  to: string
  title?: string
}

const HomeButtonComp: CompSFC<HomeButtonProps> = props =>
  <Link to={props.to} {...props} /> as any

export const HomeButton = styled(HomeButtonComp as any)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 60px;

    border: 1px solid ${props => props.theme.border.color};
    text-decoration: none;
    color: ${props => props.theme.text.color};

    ${hoverState} {
      background-color: ${props => props.theme.background.secondaryColor};
      transform: scale(1.05);
    }
    
    ${activeState} {
      background-color: ${props => props.theme.background.color};
      transform: scale(0.98);
    }
`
