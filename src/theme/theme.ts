/* eslint-disable */
import tinycolor from 'tinycolor2';

// TODO implement fade

/**
 * Colors
 */
export const primary_color = '#1890ff';
export const info_color = '#1890ff';
export const success_color = '#52c41a';
export const processing_color = '#1890ff';
export const error_color = '#f5222d';
export const highlight_color = '#f5222d';
export const warning_color = '#fa8c16';
export const normal_color = '#d9d9d9';
export const white = '#fff';
export const black = '#000';

/**
 * Base
 */
export const body_background = '#fff';
export const component_background = '#fff';
export const line_height_base = 1.5;
export const font_family = `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol'`;
export const text_color_inverse = white;
export const icon_color = 'inherit';

export const border_radius = {
  base: '4px',
  sm: '4px',
  lg: '8px',
};
export const font_size = {
  base: '14px',
  lg: '16px',
  sm: '12px',
};

export const text_color = black; // @text-color: fade(@black, 65%);
export const text_color_secondary = '#0000005c'; // fade(@black, 45%);

// Border color
export const border_color_base = tinycolor('hsv(0, 0, 85%)').toHexString(); // base border outline a component
export const border_color_split = tinycolor('hsv(0, 0, 91%)').toHexString(); // split border inside a component
export const border_color_inverse = white;
export const border_width_base = '1px';
export const border_style_base = 'solid'; // style of a components border

// Outline
export const outline_blur_size = 0;
export const outline_width = '2px';
export const outline_color = primary_color;

export const background_color_light = tinycolor('hsv(0, 0, 98%)').toHexString(); // background of header and selected item
export const background_color_base = tinycolor('hsv(0, 0, 96%)').toHexString();

// Disabled states
export const disabled_color = '#000'; // fade(#000, 25%);
export const disabled_bg = background_color_base;
export const disabled_color_dark = background_color_base; // fade(#fff, 35%);

export const padding = {
  base: '16px', // small containers and buttons
  lg: '24px', // vertical paddings
  sm: '12px', // Form controls and items
  xs: '8px', // small items
};

// Animation
export const ease_base_out = 'cubic-bezier(0.7, 0.3, 0.1, 1)';
export const ease_base_in = 'cubic-bezier(0.9, 0, 0.3, 0.7)';
export const ease_out = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
export const ease_in = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
export const ease_in_out = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
export const ease_out_back = 'cubic-bezier(0.12, 0.4, 0.29, 1.46)';
export const ease_in_back = 'cubic-bezier(0.71, -0.46, 0.88, 0.6)';
export const ease_in_out_back = 'cubic-bezier(0.71, -0.46, 0.29, 1.46)';
export const ease_out_circ = 'cubic-bezier(0.08, 0.82, 0.17, 1)';
export const ease_in_circ = 'cubic-bezier(0.6, 0.04, 0.98, 0.34)';
export const ease_in_out_circ = 'cubic-bezier(0.78, 0.14, 0.15, 0.86)';
export const ease_out_quint = 'cubic-bezier(0.23, 1, 0.32, 1)';
export const ease_in_quint = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
export const ease_in_out_quint = 'cubic-bezier(0.86, 0, 0.07, 1)';
