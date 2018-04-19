import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { predatorVision } from '../../../../styles/animations'
import { hoverState } from '../../../../styles/styled'

export interface PostHeaderProps
{
  meta: ContentMetaData
  className?: string
}

export const PostHeaderComp: React.SFC<PostHeaderProps> = ({ meta, className }) =>
  <header className={className}>
    <h1>{meta.title}</h1>
    {meta.tagline && <label>{meta.tagline}</label>}
    <nav>
      <Link className={'home-button'} to={'/'} title={'Home'}>
        <img src="/assets/images/avatar.png"/>
      </Link>
      <Link to={'/posts'}>Posts</Link>
      <Link to={'/posts/reading-list'}>Links</Link>
    </nav>
  </header>

export const PostHeader = styled(PostHeaderComp)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 100;
  min-height: 200px;
  
  h1 {
    font-size: 26px;
  }
  
  label {
    padding-top: 4px;
    font-size: 18px;
    font-style: italic;
    color: ${props => props.theme.text.secondaryColor};
  }
  
  nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 26px;
    
    .home-button {
      height: 40px;
    }
    
    a {
      display: block;
      padding: 4px;
      text-decoration: none;
      color: ${props => props.theme.text.secondaryColor};

      ${hoverState} {
        transform: scale(1.05);
        color: ${props => props.theme.text.hoverColor};
      }
      
      img {
        filter: grayscale(1);
        border-radius: 20px;
        width: 40px;
        ${hoverState} {
          animation: ${predatorVision} 1.1s infinite;
        }
      }
    }
  }
`
