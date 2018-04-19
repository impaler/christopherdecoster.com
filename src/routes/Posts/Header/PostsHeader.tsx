import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export interface PostsHeaderProps {
  className?: string
}

export const PostsHeaderComp: React.SFC<PostsHeaderProps> = ({ className }) =>
  <header className={className}>
    <h1>Posts</h1>
    <label>Ideas I want to share and explore</label>
  </header>

export const PostsHeader = styled(PostsHeaderComp)`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 60px;

  h1 {
    font-size: 22px;
    margin: 0;
    padding: 0;
  }
`
