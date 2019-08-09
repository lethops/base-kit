const fs = require('fs');
const theme = require('../src/theme/index.pre').default;

fs.writeFileSync('./src/theme/index.ts', `// generated file\nexport default ${JSON.stringify(theme, null, 2)}`);
