import * as React from 'react'
import { Provider, ProviderProps } from 'react-redux'
import { StaticRouter, StaticRouterProps } from 'react-router'
import { configureStore } from './store'
import { App } from './App'

const store = configureStore()

export interface AppStaticProviderProps {
  router: StaticRouterProps
  provider?: ProviderProps
  app?: any
}

export const AppStaticProvider = (props: AppStaticProviderProps) =>
  <Provider store={store} {...props.provider}>
    <StaticRouter context={{}} {...props.router}>
      <App {...props.app} />
    </StaticRouter>
  </Provider>
