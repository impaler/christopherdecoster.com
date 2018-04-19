import * as React from 'react'

import { Article } from '../../components/markup/article'
import { TopRightSettingsButton } from '../../components/Modal/SettingsButton'
import { PostHeader } from './components/Header'
import { PostContent } from './components/Content'
import { PostFooter } from './components/Footer'

export interface PostProps {
  html: string
  meta: ContentMetaData
  className?: string
}

export const Post: React.SFC<PostProps> =
  ({html, meta, className}) =>
  <Article className={className}>
    <PostHeader { ...{meta} } />
    <PostContent {...{ html }} />
    <PostFooter />
    <TopRightSettingsButton />
  </Article>
