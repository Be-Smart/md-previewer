'use strict';

export default function () {
  return `
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

JavaScript:

\`\`\`javascript
  function sum (a, b) {
    return a + b;
  }
\`\`\`

HTML:

\`\`\`html
  <body class="app">
    <h1>Hey There!</h1>
  </body>
\`\`\`

Table:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

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

*[Serhii Vladymyrov](https://vladymyrov.com/)*
  `;
}
