import * as React from 'react'

// view-source:http://jasonm23.github.io/markdown-css-themes/
import { storiesOf } from '@storybook/react'

import { ThemeDecorator } from '../../../themes/storybook-decorator'
import { P } from '../p'

const stories = storiesOf('common/markup/kitchensink', module)

const CommonElements = props => <>
  <h1>Markdown css themes</h1>

  <hr/>

  <h1>A First Level Header</h1>

  <h2>A Second Level Header</h2>

  <h3>A Third Level Header</h3>

  <h4>A Fourth Level Header</h4>

  <h5>A Fifth Level Header</h5>

  <h6>A Sixed Level Header</h6>

  <P>
    Now is the time for all good men to come to
    the aid of their country. This is just a
    regular paragraph.
  </P>

  <P>The quick brown fox jumped over the lazy
    dog&rsquo;s back.
  </P>

  <hr/>

  <h3>Header 3</h3>

  <blockquote>
    <P>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
      Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</P>

    <P>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
      id sem consectetuer libero luctus adipiscing.</P>

    <h2>This is an H2 in a blockquote</h2>

    <P>This is the first level of quoting.</P>

    <blockquote><P>This is nested blockquote.</P></blockquote>

    <P>Back to the first level.</P></blockquote>

  <P>Some of these words <em>are emphasized</em>.
    Some of these words <em>are emphasized also</em>.</P>

  <P>Use two asterisks for <strong>strong emphasis</strong>.
    Or, if you prefer, <strong>use two underscores instead</strong>.</P>

  <ul>
    <li>Candy.</li>
    <li>Gum.</li>
    <li>Booze.</li>
    <li>Red</li>
    <li>Green</li>
    <li><P>Blue</P></li>
    <li><P>A list item.</P></li>
  </ul>


  <P>With multiple paragraphs.</P>

  <ul>
    <li><P>Another item in the list.</P></li>
    <li><P>This is a list item with two paragraphs. Lorem ipsum dolor
      sit amet, consectetuer adipiscing elit. Aliquam hendrerit
      mi posuere lectus.</P></li>
  </ul>


  <P>Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.* Suspendisse id sem consectetuer libero luctus adipiscing.</P>

  <ul>
    <li>This is a list item with two paragraphs.</li>
  </ul>


  <P>This is the second paragraph in the list item. You&rsquo;re
    only required to indent the first line. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit.</P>

  <ul>
    <li><P>Another item in the same list.</P></li>
    <li><P>A list item with a bit of <code>code</code> inline.</P></li>
    <li><P>A list item with a blockquote:</P>

      <blockquote><P>This is a blockquote
        inside a list item.</P></blockquote>
    </li>
  </ul>


  <P>Here is an example of a pre code block</P>

  <pre>
    <code>
      tell application "Foo"
      beep
      end tell
    </code>
  </pre>

  <P>This is an <a href="http://example.com/">example link</a>.</P>

  <P>I get 10 times more traffic from <a href="http://google.com/"
    title="Google">Google</a> than from
    <a href="http://search.yahoo.com/" title="Yahoo Search">Yahoo</a> or <a
      href="http://search.msn.com/" title="MSN Search">MSN</a>.</P>

  <P>I start my morning with a cup of coffee and
    <a href="http://www.nytimes.com/">The New York Times</a>.</P>
</>

stories.add('all', () => <CommonElements />)
