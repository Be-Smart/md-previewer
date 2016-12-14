'use strict';

import React from 'react';
import marked, {Renderer} from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css'

const Previewer = (props) => {
  marked.setOptions({
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
  });

  return (
    <div dangerouslySetInnerHTML={{__html: marked(props.text)}} />
  );
}

export default Previewer
