import Header from '../components/Header';
import Sidebar from './Sidebar';
import type { LayoutProps } from '../../models';

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default DefaultLayout;
