import styles from './Popper.module.scss';
import clsx from 'clsx';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  header?: () => JSX.Element | undefined;
}

const Wrapper = ({
  children,
  className,
  header = () => undefined,
}: WrapperProps) => {
  const classes = clsx(styles.wrapper, className);
  return (
    <div className={classes}>
      {header()}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Wrapper;
