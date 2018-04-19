import * as React from 'react'
import { loadContentList } from '../../app/content-loader'
import { Posts, PostsProps } from './Posts'

export const PostsRoute = () => {
  const props: PostsProps = {
    posts: loadContentList()
  }
  return <Posts {...props} />
}
