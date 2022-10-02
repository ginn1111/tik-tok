import React from 'react';
import './GlobalStyles.scss';

interface GlobalStyleProps {
  children: React.ReactNode;
}
const GlobalStyle = ({ children }: GlobalStyleProps) => {
  return <main>{children}</main>;
};

export default GlobalStyle;
