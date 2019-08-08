import React from 'react';
import * as SC from './styles';
import { BtnColorType, BtnSizeType } from './types';

interface ButtonProps {
  size?: BtnSizeType;
  color?: BtnColorType;
  block?: boolean;
  children?: React.ReactNode;
}

export default function Button<T>({ children, ...props }: ButtonProps & T) {
  return <SC.Button<> {...props}>{children}</SC.Button>;
}
