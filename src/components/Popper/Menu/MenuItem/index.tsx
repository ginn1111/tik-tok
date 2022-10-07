import type { MenuItemProps } from '..';
import styles from './MenuItem.module.scss';
import { Link } from 'react-router-dom';

const MenuItem = ({ title, icon, url, onClick }: MenuItemProps) => {
  const Comp = url ? Link : 'div';
  return (
    <Comp className={styles.menuItem} to={url!} onClick={onClick}>
      {icon && <img src={icon} alt={title} className={styles.icon} />}
      <span className={styles.title}>{title}</span>
    </Comp>
  );
};

export default MenuItem;
