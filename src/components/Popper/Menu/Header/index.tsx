import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';

interface HeaderProps {
  title: string;
  onBack: () => void;
}

const Header = ({ title, onBack }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <button onClick={onBack} className={styles.iconBtn}>
        <FontAwesomeIcon icon={faChevronLeft as IconProp} />
      </button>
      <h4 className={styles.title}>{title}</h4>
    </header>
  );
};

export default Header;
