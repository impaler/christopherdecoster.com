import * as React from 'react'
import styled from 'styled-components'
import { CompProps, CompStyled } from '../../../styles/styled'

export interface ButtonProps extends CompProps
{
  title?: string
  onClick?: (event: React.MouseEventHandler<HTMLElement>) => void;
}

export const Button: CompStyled<ButtonProps> = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  min-height: 60px;
  border: none;
  cursor: pointer;

  color: ${props => props.theme.text.color};

  &:hover, .hover {
    color: ${props => props.theme.text.hoverColor};
    background-color: #20162c;
  }
` as any

