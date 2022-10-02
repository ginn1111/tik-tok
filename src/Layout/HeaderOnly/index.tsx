import React from 'react';
import Header from '../components/Header';
import type { LayoutProps } from '../../models';

const HeaderOnly = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default HeaderOnly;
