import * as React from 'react'

import { Avatar } from './components/Avatar'
import { HBox, VBox } from '../../components/layout/Box'
import { CompStyled, CompProps, CompSFC } from '../../styles/styled'
import { ExternalButton } from './components/ExternalButton'
import { WelcomeText } from './components/WelcomeText/WelcomeText'
import { HomeLayout } from './HomeLayout'

export interface HomeProps extends CompProps
{
  links: {
    twitter: string
    github: string
  }
}

export const Home: CompSFC<HomeProps> = props =>
  <HomeLayout>

    <HBox>
      <VBox>
        <Avatar to={'/posts'} title={'Read my blog'}/>
        <HBox>
          <ExternalButton
            href={props.links.github}
            iconSrc={'/assets/images/github-icon.svg'}
            title={'Checkout some code I share and contrib on github'}
          />
          <ExternalButton
            href={props.links.twitter}
            iconSrc={'/assets/images/twitter-icon.svg'}
            title={'See me tweet about interesting stuff'}
          />
        </HBox>
      </VBox>

      <WelcomeText />

    </HBox>

  </HomeLayout>
