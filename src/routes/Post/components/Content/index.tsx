import * as React from 'react'
import styled from 'styled-components'
import { CompSFC } from '../../../../styles/styled'

export type PostContentProps = {
  html: string
  className?: string
}

export const PostContentComp: CompSFC<PostContentProps> =
  ({className, html}) => {
  return <section
    className={className}
    dangerouslySetInnerHTML={{__html: html}}
  />
}

export const PostContent = styled(PostContentComp)`
  max-width: 550px;
  margin: 0 auto;
  padding-bottom: 80px;
  padding-left: 20px;
  padding-right: 20px;

  img {
    max-width: 100%;
  }

  a {
    text-decoration: underline;
    font-weight: normal;
    color: ${props => props.theme.text.linkColor}
  }

  a:hover {
    color: ${props => props.theme.text.hoverColor};
  }

  a:active {
    color: ${props => props.theme.text.activeColor};
  }

  p {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  
  ul {
    margin-left: 26px;
  }
  
  hr {
    margin-top: 20px;
    border: none;
    border-bottom: 1px solid #240e42;
    margin-bottom: 20px;
  }
  
  code {
    color: ${props => props.theme.text.codeColor};
  }
  
  blockquote {
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 10px;
    padding-top: 10px;
    color: ${props => props.theme.text.codeColor};

    p {
      font-size: 20px;
      font-style: italic;
      font-family: serif;
    }
    
    blockquote {
      padding: 0;
    }
    
    blockquote p, blockquote a {
      text-align: right;
      color: ${props => props.theme.text.secondaryColor};
    }
  }
`
