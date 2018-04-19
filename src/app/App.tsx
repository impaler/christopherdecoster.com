import * as React from 'react'
import { Route, Switch } from 'react-router'
import { hot } from 'react-hot-loader'
import { Helmet } from 'react-helmet'

import { Modal, ModalOverlay } from '../components/Modal/Modal'
import { PostRoute } from '../routes/Post'
import { PostsRoute } from '../routes/Posts'
import { GlobalStyles } from '../styles/global-styles'
import { HomeRoute } from '../routes/Home'
import { ConnectThemeProvider } from '../themes/ConnectThemeProvider'

export const AppComp = props =>
  <>
    <Helmet>
      <meta charSet="utf-8"/>
      <title>Chris Decoster</title>
      <link rel="canonical" href="https://christopherdecoster.com"/>
    </Helmet>
    <GlobalStyles />
    <ModalOverlay />
    <Switch>
      <Route path="/" exact component={() => <HomeRoute/>}/>
      <Route path="/posts" exact component={() => <PostsRoute/>}/>
      <Route path={'/posts/:id'} component={() => <PostRoute/>}/>
    </Switch>
  </>

export const App = hot(module)(() => <ConnectThemeProvider>
  <AppComp />
</ConnectThemeProvider>)
