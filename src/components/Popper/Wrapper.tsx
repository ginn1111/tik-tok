import styles from './Popper.module.scss';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
