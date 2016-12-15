'use strict';

import React from 'react';
import './editor.sass';

const Editor = (props) => {

  function onTextareaChange(event) {
    props.setTextValue(event.target.value);
  }

  return (
    <div className='editor'>
      <textarea rows='25'
        onChange={onTextareaChange}
        defaultValue={props.defaultValue}>
      </textarea>
    </div>
  );
}

export default Editor
