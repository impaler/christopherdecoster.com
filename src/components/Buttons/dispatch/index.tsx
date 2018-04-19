import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Link } from 'react-router-dom'

import { Action } from '../../../app/store/store'
import { CompStyled } from '../../../styles/styled'
import { Button, ButtonProps } from '../base'

export interface ButtonDispatchProps<Payload=any> extends ButtonProps
{
  action: Action<Payload>
}

type DispatchProps = {
  dispatch: Dispatch<any>
  action: Action
}

type WithDispatchProps = {
  action: Action
}

export const withDispatch = (WrappedComponent): React.SFC<WithDispatchProps> => {
  return connect(null, mapDispatchToProps)(props => {
    return withBindOnClickDispatch(WrappedComponent, props)
  })
}

const WrappedDispatchButton = withDispatch(Button) as any

export const ButtonDispatch: CompStyled<ButtonDispatchProps> =
  WrappedDispatchButton as any


const mapDispatchToProps = (dispatch, props): DispatchProps => ({
  ...props,
  dispatch,
})

const withBindOnClickDispatch = (
  WrappedComponent,
  props: DispatchProps,
) => {
  const { action, dispatch } = props
  const onClick = () => dispatch(action)
  return <WrappedComponent
    {...{ ...props, onClick }}
  />
}
