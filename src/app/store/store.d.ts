
import { Action as ReduxAction } from 'redux'

export interface Action<Payload=any> extends ReduxAction
{
  payload?: Payload
}
