import styled, { css } from 'styled-components';
import sf from 'sf';
import * as theme from './theme';
import { t, dt } from '../../../helpers/styles';

const btnBase = css<any>`
  position: relative;
  display: inline-block;
  font-weight: ${sf(theme.btn_font_size_base)};
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: ${t('btn_border_width')} ${t('btn_border_style')} transparent;
  box-shadow: ${t('btn_shadow')};
  cursor: pointer;
  transition: all 0.3s ${t('ease_base_in')};
  user-select: none;
  touch-action: manipulation;
  width: ${props => (props.block ? '100%' : 'initial')};

  :active,
  :focus {
    outline: 0;
  }
  :not(:disabled):hover {
    text-decoration: none;
  }
  :not(:disabled):active {
    outline: 0;
    box-shadow: none;
  }

  &:disabled {
    cursor: not-allowed;
    > * {
      pointer-events: none;
    }
  }

  &::before {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    z-index: 1;
    display: none;
    background: ${t('component_background')};
    border-radius: inherit;
    opacity: 0.35;
    transition: opacity 0.2s;
    content: '';
    pointer-events: none;
  }
`;

const btnSize = css`
  height: ${dt('btn_height', 'size')};
  padding: ${dt('btn_padding', 'size')};
  font-size: ${dt('font_size', 'size')};
  border-radius: ${dt('btn_border_radius', 'size')};
`;

const btnColor = css`
  color: ${sf(theme.btn_color, 'color')};
  background-color: ${dt('btn_bg', 'color')};
  border-color: ${dt('btn_border', 'color')};

  &:hover,
  &:focus {
    color: ${dt('btn_color_active', 'color')};
    background-color: ${dt('btn_bg_hovered', 'color')};
    border-color: ${dt('btn_border_hovered', 'color')};
  }
  &:active,
  &.active {
    color: ${dt('btn_color_active', 'color')};
    background-color: ${dt('btn_bg_active', 'color')};
    border-color: ${dt('btn_border_active', 'color')};
  }
`;

export const Button = styled.button`
  line-height: ${t('line_height_base')};
  ${btnBase}
  ${btnSize}
  ${btnColor}
`;
