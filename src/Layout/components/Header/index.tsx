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
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '../../../components/Popper';
import AccountItem from '../../../components/AccountItem';
import Button from '../../../components/Button';
import Menu from '../../../components/Popper/Menu';
import styles from './Header.module.scss';
import images from '../../../assets/imgs';

// Type
import type { MenuItemProps } from '../../../components/Popper/Menu';

const MENU_DUM: MenuItemProps[] = [
  {
    icon: require('../../../assets/icons/lang-icon.svg').default,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
          children: {
            title: 'Tiếng Việt',
            data: [
              {
                code: 'en',
                title: 'English',
              },
              {
                code: 'vi',
                title: 'Tiếng Việt',
              },
              {
                code: 'vi',
                title: 'Tiếng Việt',
              },
              {
                code: 'vi',
                title: 'Tiếng Việt',
              },
              {
                code: 'vi',
                title: 'Tiếng Việt',
              },
              {
                code: 'vi',
                title: 'Tiếng Việt',
              },
              {
                code: 'vi',
                title: 'Tiếng Việt',
              },
              {
                code: 'vi',
                title: 'Tiếng Việt',
              },
              {
                code: 'vi',
                title: 'Tiếng Việt',
              },
              {
                code: 'vi',
                title: 'Tiếng Việt',
              },
            ],
          },
        },
      ],
    },
  },
  {
    icon: require('../../../assets/icons/feed-back-icon.svg').default,
    title: 'Feedback and Help',
    url: '/feedback',
  },
  {
    icon: require('../../../assets/icons/keyboard-icon.svg').default,
    title: 'Keyboard Shortcuts',
  },
];

const Header = () => {
  function menuItemChangeHandler(item: MenuItemProps) {
    console.log({ item });
  }

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Link to="/">
          <img src={images.logo} alt="Tik tok" />
        </Link>
        <div>
          <Tippy
            placement="bottom-start"
            interactive
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
          >
            Upload
          </Button>
          <Button>Login</Button>
          <Menu menuItems={MENU_DUM} onChange={menuItemChangeHandler}>
            <button className={styles.menuBtn}>
              <FontAwesomeIcon
                icon={faEllipsisVertical as IconProp}
                className={styles.menuIcon}
              />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
