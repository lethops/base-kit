/* eslint-disable */
import tinycolor from 'tinycolor2';
import { background_color_light } from './theme';

// TODO implement fade

/**
 * Colors
 */

let theme: any = {};

theme.colors = {
  primary: '#1890ff',
  info: '#1890ff',
  success: '#52c41a',
  processing: '#1890ff',
  error: '#f5222d',
  highlight: '#f5222d',
  warning: '#fa8c16',
  normal: '#d9d9d9',
  white: '#fff',
  black: '#000',
};

theme.base = {
  body_background: '#fff',
  component_background: '#fff',
  line_height_base: 1.5,
  font_family: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol'`,
  text_color_inverse: theme.colors.white,
  icon_color: 'inherit',
};

theme.border_radius = {
  base: '4px',
  sm: '2px',
};

theme.font_size = {
  base: '14px',
  lg: '16px',
  sm: '12px',
};

theme.text = {
  color: theme.colors.black,
  color_secondary: '#0000005c',
};

theme.border = {
  color_base: tinycolor('hsv(0, 0, 85%)').toHexString(),
  color_split: tinycolor('hsv(0, 0, 91%)').toHexString(),
  color_inverse: theme.colors.white,
  width_base: '1px',
  style_base: 'solid',
};

theme.outline = {
  blur_size: 0,
  width: '2px',
  color: theme.colors.white,
};

theme.background = {
  color_base: tinycolor('hsv(0, 0, 96%)').toHexString(),
  color_light: tinycolor('hsv(0, 0, 98%)').toHexString(), // background of header and selected item
};

theme.disabled = {
  color: '#000',
  bg: theme.background.color_base,
  color_dark: background_color_light,
};

theme.padding = {
  lg: '24px',
  md: '16px',
  sm: '12px',
  xs: '8px',
};

theme.animations = {
  ease_base_out: 'cubic-bezier(0.7, 0.3, 0.1, 1)',
  ease_base_in: 'cubic-bezier(0.9, 0, 0.3, 0.7)',
  ease_out: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  ease_in: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  ease_in_out: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  ease_out_back: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
  ease_in_back: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
  ease_in_out_back: 'cubic-bezier(0.71, -0.46, 0.29, 1.46)',
  ease_out_circ: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  ease_in_circ: 'cubic-bezier(0.6, 0.04, 0.98, 0.34)',
  ease_in_out_circ: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  ease_out_quint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  ease_in_quint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  ease_in_out_quint: 'cubic-bezier(0.86, 0, 0.07, 1)',
};

export default theme;
