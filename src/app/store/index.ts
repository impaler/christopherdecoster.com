import { Store, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'
import { History } from 'history'

import { RootState, rootReducer, initialAppState } from './reducers'

export function configureStore (
  history?: History,
  initialState?: RootState
): Store<RootState>
{
  initialState = initialState || initialAppState

  let middleware = history ?
    applyMiddleware(routerMiddleware(history)) :
    applyMiddleware()

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware)
  }

  const store = createStore(rootReducer as any, initialState, middleware) as Store<RootState>

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
