import React from 'react';
import * as SC from './styles';
import { BtnColorType, BtnSizeType } from './theme/type';

interface ButtonProps {
  size?: BtnSizeType;
  color?: BtnColorType;
  children?: React.ReactNode;
}
export default function Button({ children, ...props }: ButtonProps) {
  return <SC.Button<> {...props}>{children}</SC.Button>;
}
