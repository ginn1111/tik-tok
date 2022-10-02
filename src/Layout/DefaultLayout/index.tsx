import Header from '../components/Header';
import Sidebar from './Sidebar';
import type { LayoutProps } from '../../models';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <aside className={styles.sideBar}>
          <Sidebar />
        </aside>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
