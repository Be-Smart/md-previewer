'use strict';

import React from 'react';

import Editor from './md_editor';
import Previewer from './previewer';

export default class App extends React.Component {
  // constructor (props) {
  //   super(props);
  // }

  render () {
    return (
      <div>
        <Editor />
        <Previewer />
      </div>
    );
  }
}
