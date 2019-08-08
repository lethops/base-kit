import {
  border_radius_base,
  border_width_base,
  border_style_base,
  primary_color,
  text_color,
  component_background,
  border_color_base,
  error_color,
  disabled_color,
  disabled_bg,
  padding_md,
  font_size_lg,
  font_size_base,
  padding_xs,
} from '../../../theme/theme';
import { generateColor } from '../../../helpers/styles/color';

export const btn_font_weight = 400;
export const btn_border_width = border_width_base;
export const btn_border_style = border_style_base;
export const btn_primary_shadow = '0 2px 0 rgba(0, 0, 0, 0.045)';
export const btn_shadow = '0 2px 0 rgba(0, 0, 0, 0.015)';
export const btn_text_shadow = '0 -1px 0 rgba(0, 0, 0, 0.12)';

// start `colors`
export const btn_color_base = text_color;
export const btn_bg_base = component_background;
export const btn_border_base = border_color_base;

export const btn_color_primary = '#fff';
export const btn_bg_primary = primary_color;

export const btn_color_disable = disabled_color;
export const btn_bg_disable = disabled_bg;
export const btn_border_disable = border_color_base;

export const btn_color_danger = '#fff';
export const btn_bg_danger = generateColor(error_color, 5);
export const btn_border_danger = generateColor(error_color, 5);
// end `colors`


// start `btnSize`
export const btn_height_base = '32px';
export const btn_height_lg = '40px';
export const btn_height_sm = '24px';


export const btn_padding_base = `0 ${padding_md} 1px`;
export const btn_padding_lg = btn_padding_base;
export const btn_padding_sm = `0 ${padding_xs} 1px`;

export const btn_border_radius_base = border_radius_base;
export const btn_border_radius_sm = border_radius_base;
export const btn_border_radius_lg = border_radius_base;

export const btn_font_size_base = font_size_base;
export const btn_font_size_lg = font_size_lg;
export const btn_font_size_sm = font_size_base;
// end `btnSize`


export const btn_circle_size_base = btn_height_base;
export const btn_circle_size_lg = btn_height_lg;
export const btn_circle_size_sm = btn_height_sm;

export const btn_group_border = generateColor(primary_color, 7); // primary_7
