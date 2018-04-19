import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'

import { configureStore } from './store'
import { App } from './App'

const history = createBrowserHistory()
const store = configureStore(history)

export const AppProvider = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>

ReactDOM.hydrate(
  <AppProvider />,
  document.getElementById('root')
)
