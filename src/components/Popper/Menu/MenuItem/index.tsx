import type { MenuItemProps } from '..';
import styles from './MenuItem.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const MenuItem = ({ title, icon, url, onClick, separate }: MenuItemProps) => {
  const Comp = url ? Link : 'div';
  const classes = clsx(styles.menuItem, {
    [styles.separate]: separate,
  });
  return (
    <Comp className={classes} to={url!} onClick={onClick}>
      {icon && <img src={icon} alt={title} className={styles.icon} />}
      <span className={styles.title}>{title}</span>
    </Comp>
  );
};

export default MenuItem;
