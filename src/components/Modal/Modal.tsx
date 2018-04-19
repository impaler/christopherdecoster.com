import { isNull } from 'util'
import * as React from 'react'
import { action_CloseSettings } from '../../app/store/overlays'

import { RootState } from '../../app/store/reducers'
import { action_SetTheme, ThemeState } from '../../app/store/theme'
import { Button } from '../Buttons/base'
import { ButtonDispatch, withDispatch } from '../Buttons/dispatch'
import styled, { CompProps, CompSFC } from '../../styles/styled'
import { HBox } from '../layout/Box'

import { connect } from 'react-redux'

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: rgba(103, 58, 183, 0.12);
  cursor: pointer;
`

const TopRightButton = withDispatch(Button.extend`
  position: absolute;
  top: 0;
  right: 0;
`)

export const ModalOverlayComp: CompSFC<{ modal: null | true } & CompProps> = ({ modal, ...props }) => {
  return modal ? <Modal {...props} /> : null
}

export const ModalOverlay = connect(
  (state: RootState) => ({
    modal: state.overlays.settings,
    theme: state.theme,
  }),
)(ModalOverlayComp)

const ModalOverlayContainer = withDispatch(props => {

    const close = () => {
      debugger
      props.dispatch(action_CloseSettings())
    }
    return <ModalStyled {...props} onClick={() => close()} />
  }) as any

const flip = theme => theme === 'dark' ? 'light' : 'dark'

export const Modal: CompSFC = (props: {theme: ThemeState}) =>
  <ModalOverlayContainer>
    <TopRightButton
      action={action_CloseSettings()}
    >x</TopRightButton>

    <ModalContainer>
      <HBox>
        <ButtonDispatch
          action={action_SetTheme('dark')}
        >Dark</ButtonDispatch>
        <ButtonDispatch
          action={action_SetTheme('light')}
        >Light</ButtonDispatch>
      </HBox>
      <p style={{color:'white', textAlign: 'center'}}>
        Where there is {flip(flip(props.theme.current))},
        there is {flip(props.theme.current)}.
      </p>
    </ModalContainer>
  </ModalOverlayContainer>

const ModalContainer = styled.div`
  display: block;
  margin: 20vh auto;
  height: 180px;
  width: 360px;

  background-color: ${props => props.theme.background.tertiaryColor};
`
