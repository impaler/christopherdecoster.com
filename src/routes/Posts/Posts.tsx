import { CompProps, hoverState, CompSFC } from '../../styles/styled'
import { TopRightSettingsButton } from '../../components/Modal/SettingsButton'
import { PostFooter } from '../Post/components/Footer'
import { PostsHeader } from './Header/PostsHeader'
import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export interface PostsProps extends CompProps
{
  posts: ContentDataIndexItem[]
}

const PostsComp: CompSFC<PostsProps> = ({className, posts}) =>
  <>
  <article className={className}>
    <PostsHeader />
    <ul>
      { posts.map((item: any, index) =>
        <li key={`${item.id}-${index}`}>
          <Link to={`/posts/${item.id}`} >
            <h2>{item.title}</h2>
            <label>{item.tagline}</label>
          </Link>
        </li>
      ) }
    </ul>
  </article>
  <PostFooter />
  <TopRightSettingsButton />
  </>

export const Posts = styled(PostsComp)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 60px;
    margin-left: 0;
  }

  li a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 450px;
    min-height: 130px;
    padding: 10px;
    border: 1px solid ${props => props.theme.border.color};
    margin: 10px;
    text-decoration: none;
    background-color: ${props => props.theme.background.color};
    color: ${props => props.theme.text.color};

    ${hoverState} {
      background-color: ${props => props.theme.background.secondaryColor};
      transform: scale(1.025);
    }

    label {
      color: ${props => props.theme.text.secondaryColor};
      cursor: pointer;
      font-style: italic;
    }
  }

  ul li {
    list-style: none;
    
    h2 {
      font-weight: normal;
      font-size: 20px;
    }
  }

  .starfield {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    animation: fadein 4s;
  }

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`
