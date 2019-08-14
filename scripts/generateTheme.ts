const fs = require('fs');
const theme = require('../src/theme/index').default;

fs.writeFileSync(
  './src/theme/index.generated.ts',
  `/* eslint-disable */\n// generated file\nexport default ${JSON.stringify(theme, null, 2)}`
);
