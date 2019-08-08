/* eslint-disable camelcase */
import {
  border_radius_base,
  border_width_base,
  border_style_base,
  primary_color,
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

export const btn_group_border = generateColor(primary_color, 7); // primary_7

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

export const btn_circle_size_base = btn_height_base;
export const btn_circle_size_lg = btn_height_lg;
export const btn_circle_size_sm = btn_height_sm;
// end `btnSize`
