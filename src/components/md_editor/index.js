'use strict';

import React from 'react';

const Editor = (props) => {

  function onTextareaChange(event) {
    props.setTextValue(event.target.value);
  }

  return (
    <div>
      <textarea rows='10' cols='30'
        onChange={onTextareaChange}
        defaultValue={props.defaultValue}>
      </textarea>
    </div>
  );
}

export default Editor
