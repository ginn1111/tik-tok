import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import images from '../../../assets/imgs';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faCircleXmark,
  faSpinner,
  faSearch,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import AccountItem from '../../../components/AccountItem';
import Button from '../../../components/Button';

const Header = () => {
  const [accounts, setAccounts] = useState<string[]>([]);

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Link to="/">
          <img src={images.logo} alt="Tik tok" />
        </Link>
        <div>
          <Tippy
            // Edit here
            placement="bottom-start"
            interactive
            visible={true}
            render={() => {
              return (
                <div
                  className={styles.searchResult}
                  tabIndex={-1}
                  aria-expanded="false"
                >
                  <PopperWrapper>
                    <h4 className={styles.title}>Accounts</h4>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                  </PopperWrapper>
                </div>
              );
            }}
          >
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search accounts and videos"
                spellCheck={false}
              />
              <button className={styles.clear} type="reset">
                <FontAwesomeIcon icon={faCircleXmark as IconProp} />
              </button>
              <FontAwesomeIcon
                icon={faSpinner as IconProp}
                className={styles.loading}
              />
              <button className={styles.searchBtn}>
                <FontAwesomeIcon icon={faSearch as IconProp} />
              </button>
            </div>
          </Tippy>
        </div>
        <div className={styles.actions}>
          <Button
            type="outline"
            leftIcon={<FontAwesomeIcon icon={faPlus as IconProp} />}
            onClick={() => console.log('click')}
          >
            Login
          </Button>
          <Button href="https://google.com" target="_blank">
            Login
          </Button>
          <Button type="rounded" size="small">
            Login
          </Button>
          <Button type="outline-primary" size="small" disabled>
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
