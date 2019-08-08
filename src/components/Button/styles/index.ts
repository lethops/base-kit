import styled, { css } from 'styled-components';
import { t, dt } from '../../../helpers/styles';

const btnBase = css`
  position: relative;
  display: inline-block;
  font-weight: ${t('btn_font_weight')};
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: ${t('btn_border_width')} ${t('btn_border_style')} transparent;
  box-shadow: ${t('btn_shadow')};
  cursor: pointer;
  transition: all 0.3s ${t('ease_base_in')};
  user-select: none;
  touch-action: manipulation;

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
`;

const btnSize = css`
  height: ${dt('btn_height', 'size')};
  padding: ${dt('btn_padding', 'size')};
  font-size: ${dt('font_size', 'size')};
  border-radius: ${dt('btn_border_radius', 'size')};
`;

const btnColor = css`
  color: ${dt('btn_color', 'color')};
  background-color: ${dt('btn_bg', 'color')};
  border-color: ${dt('btn_border', 'color')};

  &:hover,
  &:focus {
    color: ${dt('btn_color', 'color')};
    background-color: ${dt('btn_bg', 'color')};
    border-color: ${dt('btn_border', 'color')};
  }
  &:active,
  &.active {
    color: ${dt('btn_color', 'color')};
    background-color: ${dt('btn_bg', 'color')};
    border-color: ${dt('btn_border', 'color')};
  }
`;

export const Button = styled.button`
  line-height: ${t('line_height_base')};
  ${btnBase}
  ${btnSize}
  ${btnColor}
`;
