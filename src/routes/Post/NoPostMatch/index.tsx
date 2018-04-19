import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Article } from '../../../components/markup/article'
import { CompProps } from '../../../styles/styled'

export const NoPostMatchComp = ({ className }) =>
  <Article className={className}>
    No Match
  </Article>

export const NoPostMatch = styled<CompProps>(NoPostMatchComp)`
 
`
