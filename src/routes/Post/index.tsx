import * as React from 'react'
import { path } from 'ramda'
import { withRouter, RouteComponentProps, Switch, Route } from 'react-router'

import { loadContentByID } from '../../app/content-loader'
import { NoPostMatch } from './NoPostMatch'
import { Post, PostProps } from './Post'

export interface PostRouteParams
{
  id: string
}

type PostRouteType = React.SFC<RouteComponentProps<PostRouteParams>>

export const PostRouteComp: PostRouteType = ({ match }) => {
  const id = path<string>(['params', 'id'], match)

  const { html, meta } = loadContentByID(id)
  const props: PostProps = {
    html, meta,
  }

  return <Switch>
    <Route path={'/posts/:id'} component={ () =>
      <ScrollToTopComp>
        <Post {...props}/>
      </ScrollToTopComp>
    } />
    <Route component={() => <NoPostMatch />}/>
  </Switch>
}

export const PostRoute = withRouter(PostRouteComp)

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
class ScrollToTopComp extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return this.props.children
  }
}
