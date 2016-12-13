'use strict';

import React from 'react';

import Editor from './md_editor';
import Previewer from './previewer';

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      val: `
Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Serhii Vladymyrov](https://vladymyrov.com/)*`
    };
  }

  setTextValue (string) {
    this.setState({val: string});
  }

  render () {
    return (
      <div>
        <Editor
          setTextValue={this.setTextValue.bind(this)}
          defaultValue={this.state.val}
        />
        <Previewer text={this.state.val}/>
      </div>
    );
  }
}
