import styled  from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const HomeLayout = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  animation: ${fadeIn} 0.5s;
  
  nav {
    width: 370px;
  }
`
