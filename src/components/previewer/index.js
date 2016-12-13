'use strict';

import React from 'react';
import marked from 'marked';

const Previewer = (props) => {
  let md = marked(props.text);
  return (
    <div dangerouslySetInnerHTML={{__html: md}} />
  );
}

export default Previewer
