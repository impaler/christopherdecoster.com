import * as React from 'react'
import { predatorVision } from '../../../../styles/animations'
import styled, { CompProps, hoverState, styledEl, CompSFC } from '../../../../styles/styled'
import { ButtonTo } from '../../../../components/Buttons/router-to'

export interface AvatarProps extends CompProps
{
  to: string
  title?: string
}

const AvatarComp: CompSFC<AvatarProps> = props =>
  <ButtonTo
    className={props.className}
    to={props.to}
    title={props.title}
  >
    <img src={'/assets/images/avatar.png'}/>
  </ButtonTo>

export const Avatar = styled(AvatarComp)`
  display: flex;
  padding: 10px;
  
  ${hoverState} {
    background: none;
  }

  img {
    width: 140px;
    border-radius: 70px;
    cursor: pointer;
    filter: grayscale(1);

    ${hoverState} {
      transform: scale(1.1, 1.1);
      animation: ${predatorVision} 1.1s infinite;
    }
  }
`