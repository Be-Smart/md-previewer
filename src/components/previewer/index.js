'use strict';

import React from 'react';
import marked, {Renderer} from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css'
import './previewer.sass';

const renderer = new Renderer();
renderer.code = (code, language) => {
  // Check whether the given language is valid for highlight.js.
  const validLang = !!(language && hljs.getLanguage(language));
  // Highlight only if the language is valid.
  const highlighted = validLang ? hljs.highlight(language, code).value : code;
  // Render the highlighted code with `hljs` class.
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};

const Previewer = (props) => {
  marked.setOptions({ renderer });

  return (
    <div dangerouslySetInnerHTML={{__html: marked(props.text)}} />
  );
}

export default Previewer
