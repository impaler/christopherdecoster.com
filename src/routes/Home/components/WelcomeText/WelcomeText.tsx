import * as React from 'react'
import styled from 'styled-components'

import { CompProps } from '../../../../styles/styled'
import { Nav } from '../../../../components/markup/nav'
import { VBox } from '../../../../components/layout/Box'

import { HomeButton } from '../HomeButton'
import { TypeoutAnimation } from '../../../../components/Typeout'
import { SettingsButton } from '../../../../components/Modal/SettingsButton'

const WelcomeTextComp = ({ className }) =>
  <VBox className={className}>
    <TypeoutAnimation>
      Hi I'm Chris, welcome to my little home on the web.
      I am a generalist software craftsman who loves
      talking tech, learning and writing code.
    </TypeoutAnimation>

    <Nav>
      <HomeButton
        to={'/posts'}
        title={'Read my blog'}
      >
        Blog
      </HomeButton>
      <HomeButton
        to={'/posts/reading-list'}
        title={'Checkout my reading and link list'}
      >
        Links
      </HomeButton>
      <SettingsButton />
    </Nav>
  </VBox>


export const WelcomeText = styled<Partial<CompProps>>(WelcomeTextComp as any)`
`
