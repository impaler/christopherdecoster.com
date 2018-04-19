import { configure, addDecorator } from '@storybook/react'
import {
    GlobalStylesDecorator, StoreDecorator,
    ThemeDecorator
} from '../src/themes/storybook-decorator'

addDecorator(ThemeDecorator)
addDecorator(GlobalStylesDecorator)
addDecorator(StoreDecorator)

import '@storybook/addon-console'
import { setConsoleOptions } from '@storybook/addon-console'
// setConsoleOptions({
//   panelInclude: [/redux-action/],
// })

import { withConsole } from '@storybook/addon-console'

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

const req = require.context('../src', true, /\.stories\.tsx$/)

function loadStories () {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)

