/* eslint-disable import/no-mutable-exports,global-require */
import './app.d';
import Button from './components/Button';

let theme: any;

if (process.env.NODE_ENV === 'production') {
  theme = require('./theme/index.generated').default;
} else {
  theme = require('./theme').default;
}

export { theme, Button };
