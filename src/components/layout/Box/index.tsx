import * as React from 'react'
import styled from 'styled-components'
import { Flex, FlexProps } from 'grid-styled'

import { CompProps } from '../../../styles/styled'

type FlexCompProps = Partial<FlexProps & CompProps>

export const VAlignFlex = `
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const VBox = styled<FlexCompProps>(Flex)`
  ${VAlignFlex}
` as any

export const HAlignFlex = `
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HBox = styled<FlexCompProps>(Flex)`
  ${HAlignFlex}
`
