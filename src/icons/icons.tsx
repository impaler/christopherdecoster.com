import * as React from 'react'
import InlineSVG from 'svg-inline-react'
import { registerSvgRequireHook } from '../static/require-hook'
import styled, { hoverState } from '../styles/styled'

export enum IconTypes {
  settings = 'settings',
}

export interface IconProps
{
  width?: number
  height?: number
  className?: string
}

export const withReactSVGInline = (svgRawText: string): React.SFC<IconProps> =>
    props => <InlineSVG
      style={{display: 'block', width: '44px', height: '44px'}}
      element={'span'}
      raw
      src={svgRawText}
      {...props}
    />

registerSvgRequireHook()
const webpackLoader = process.env.WEBPACK ? `!svg-inline-loader!` : ''

export const SettingsIcon: any = styled(withReactSVGInline(
  require(`${webpackLoader}../../assets/images/settings-icon.svg`),
))`
  path {
    fill: ${props => props.theme.background.iconColor};
  }
`

const iconList: {[type: string]: React.SFC<IconProps>} = {
  [IconTypes.settings]: SettingsIcon,
}

export const IconType = (props) => {
  const Icon = iconList[props.type]
  return <Icon {...props} />
}
