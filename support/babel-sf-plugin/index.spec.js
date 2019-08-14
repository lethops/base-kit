/* eslint-disable */
const babel = require('babel-core');
const plugin = require('./');

const example = `
import sf from 'sf';
import theme from './theme';

const b = {};
const a = sf(theme.btn, 'd')
const a2 = sf(theme.btn)
`;

it('works', () => {
  const { code } = babel.transform(example, { plugins: [plugin] });
  expect(code).toEqual(`var _sf = (themePropertyKey, propertyKey) => {
  return propertyKey == null ? props => {
    return props.theme[themePropertyKey];
  } : props => {
    return props.theme[themePropertyKey][props[propertyKey]];
  };
};

const b = {};
const a = _sf('btn', 'd');
const a2 = _sf('btn');`);
});


