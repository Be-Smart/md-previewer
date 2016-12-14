'use strict';

import React from 'react';

import Editor from './md_editor';
import Previewer from './previewer';
import md from './helpers/default_md';

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = { val: md() };
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
