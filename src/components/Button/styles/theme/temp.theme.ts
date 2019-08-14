/* eslint-disable camelcase */
import * as baseTheme from '../../../../theme/theme';
import { generateColor } from '../../../../helpers/styles/color';

export const btn_font_weight = 400;
export const btn_border_width = baseTheme.border_width_base;
export const btn_border_style = baseTheme.border_style_base;
export const btn_primary_shadow = '0 2px 0 rgba(0, 0, 0, 0.045)';
export const btn_shadow = '0 2px 0 rgba(0, 0, 0, 0.015)';
export const btn_text_shadow = '0 -1px 0 rgba(0, 0, 0, 0.12)';

export const btn_group_border = generateColor(baseTheme.primary_color, 7); // primary_7

export const btn_height = {
  base: '32px',
  lg: '40px',
  sm: '24px',
};

export const btn_padding = {
  base: `0 ${baseTheme.padding.base} 1px`,
  lg: `0 ${baseTheme.padding.lg} 1px`,
  sm: `0 ${baseTheme.padding.sm} 1px`,
};

export const btn_border_radius = {
  ...baseTheme.border_radius,
};

export const btn_font_size = {
  ...baseTheme.font_size,
};

export const btn_circle_height = {
  ...btn_height,
};

export const btn_color = {
  base: baseTheme.text_color,
  primary: '#fff',
  disable: baseTheme.disabled_color,
  danger: '#fff',
};

export const btn_color_hovered = {
  base: generateColor(baseTheme.primary_color, 5),
  primary: generateColor(baseTheme.primary_color, 5),
};

export const btn_color_active = {
  base: generateColor(baseTheme.primary_color, 7),
};

export const btn_border = {
  base: baseTheme.border_color_base,
  primary: baseTheme.border_color_base,
  disable: baseTheme.border_color_base,
  danger: generateColor(baseTheme.error_color, 5),
};

export const btn_border_active = {
  base: generateColor(baseTheme.primary_color, 7),
};

export const btn_border_hovered = {
  base: btn_font_weight,
  primary: 1,
  disable: 1,
  danger: 1,
};

export const btn_bg = {
  base: btn_font_weight,
  primary: 1,
  disable: 1,
  danger: 1,
};

export const btn_bg_hovered = {
  base: 1,
  primary: 1,
  disable: 1,
  danger: 1,
};

export const btn_bg_active = {
  base: 1,
  primary: 1,
  disable: 1,
  danger: 1,
};

export const btn_bg_base = baseTheme.component_background;
export const btn_border_base = baseTheme.border_color_base;
export const btn_border_hovered_base = generateColor(baseTheme.primary_color, 5);
export const btn_border_active_base = generateColor(baseTheme.primary_color, 7);
export const btn_bg_hovered_base = btn_bg_base;
export const btn_bg_active_base = btn_bg_base;

export const btn_color_hovered_primary = generateColor(baseTheme.primary_color, 5);
export const btn_border_primary = baseTheme.border_color_base;
export const btn_bg_primary = baseTheme.primary_color;
export const btn_bg_hovered_primary = generateColor(btn_bg_primary, 5);
export const btn_bg_active_primary = generateColor(btn_bg_primary, 7);

export const btn_color_disable = baseTheme.disabled_color;
export const btn_bg_disable = baseTheme.disabled_bg;
export const btn_border_disable = baseTheme.border_color_base;

export const btn_bg_danger = generateColor(baseTheme.error_color, 5);
export const btn_border_danger = generateColor(baseTheme.error_color, 5);
export const btn_bg_hovered_danger = generateColor(btn_border_danger, 5);
export const btn_bg_active_danger = generateColor(btn_border_danger, 7);
