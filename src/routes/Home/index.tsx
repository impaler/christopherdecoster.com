import * as React from 'react'
import { Home, HomeProps } from './Home'

export const HomeRoute = () => {
  const props: HomeProps = {
    links: {
      twitter: '#',
      github: '#',
    }
  }
  return <Home {...props} />
}
