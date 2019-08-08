/* eslint-disable camelcase */
// start `colors`
import {
  border_color_base,
  component_background,
  disabled_bg,
  disabled_color,
  error_color,
  primary_color,
  text_color,
} from '../../../theme/theme';
import { generateColor } from '../../../helpers/styles/color';

export const btn_color_base = text_color;
export const btn_bg_base = component_background;
export const btn_border_base = border_color_base;
export const btn_color_hovered_base = generateColor(primary_color, 5);
export const btn_color_active_base = generateColor(primary_color, 7);
export const btn_border_hovered_base = generateColor(primary_color, 5);
export const btn_border_active_base = generateColor(primary_color, 7);
export const btn_bg_hovered_base = btn_bg_base;
export const btn_bg_active_base = btn_bg_base;

export const btn_color_primary = '#fff';
export const btn_color_hovered_primary = generateColor(primary_color, 5);
export const btn_color_active_primary = btn_color_primary;
export const btn_border_primary = border_color_base;
export const btn_bg_primary = primary_color;
export const btn_bg_hovered_primary = generateColor(btn_bg_primary, 5);
export const btn_bg_active_primary = generateColor(btn_bg_primary, 7);

export const btn_color_disable = disabled_color;
export const btn_bg_disable = disabled_bg;
export const btn_border_disable = border_color_base;

export const btn_color_danger = '#fff';
export const btn_bg_danger = generateColor(error_color, 5);
export const btn_border_danger = generateColor(error_color, 5);
export const btn_bg_hovered_danger = generateColor(btn_border_danger, 5);
export const btn_bg_active_danger = generateColor(btn_border_danger, 7);
