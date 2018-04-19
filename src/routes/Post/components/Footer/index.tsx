import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CompSFC } from '../../../../styles/styled'

export const PostFooterComp: CompSFC = ({className}) =>
  <footer className={className}>
    <Link to={'/'}>christopherdecoster.com</Link>
    <Link to={'/'}>Posts</Link>
  </footer>

export const PostFooter = styled(PostFooterComp)`
  text-align: center;
  & a {
    border-right: 1px solid #333;
    padding: 4px;
  }
`
