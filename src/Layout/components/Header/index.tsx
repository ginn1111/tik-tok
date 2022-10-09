import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faCircleXmark,
  faSpinner,
  faPlus,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '../../../components/Popper';
import AccountItem from '../../../components/AccountItem';
import Button from '../../../components/Button';
import Menu from '../../../components/Popper/Menu';
import styles from './Header.module.scss';
import images from '../../../assets/imgs';

// test
import imgTest from '../../../assets/imgs/ny-img6.jpg';

// Type
import type { MenuItemProps } from '../../../components/Popper/Menu';
import Image from '../../../components/Image';
import { InboxIcon, MessageIcon, SearchIcon } from '../../../components/Icons';

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

const ACCOUNT_MENU_DUM = [
  {
    icon: require('../../../assets/icons/profile-icon.svg').default,
    title: 'View profile',
    url: '/profile',
  },
  {
    icon: require('../../../assets/icons/tik-tok-coin-icon.svg').default,
    title: 'Get coins',
    url: '/get-coins',
  },
  {
    icon: require('../../../assets/icons/live-icon.svg').default,
    title: 'LIVE studio',
    url: '/live',
  },
  {
    icon: require('../../../assets/icons/settings-icon.svg').default,
    title: 'Settings',
    url: '/settings',
  },
  ...MENU_DUM,
  {
    icon: require('../../../assets/icons/log-out-icon.svg').default,
    title: 'Log out',
    separate: true,
  },
];

const Header = () => {
  const [currentUser, setCurrentUser] = useState<{} | undefined>();

  function menuItemChangeHandler(item: MenuItemProps) {
    console.log({ item });
    if (item.title === 'Log out') {
      setCurrentUser(undefined);
    }
  }

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Link to="/">
          <img src={images.logo} alt="Tik tok" />
        </Link>
        <div>
          <TippyHeadless
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
                <SearchIcon />
              </button>
            </div>
          </TippyHeadless>
        </div>
        <div className={styles.actions}>
          <Button
            type="outline"
            leftIcon={<FontAwesomeIcon icon={faPlus as IconProp} />}
          >
            Upload
          </Button>
          {currentUser ? (
            <>
              <Tippy content="Message" offset={[0, 13]} placement="bottom">
                <Link className={styles.actionItem} to="/message">
                  <MessageIcon />
                </Link>
              </Tippy>

              <Tippy content="Inbox" placement="bottom">
                <button className={styles.actionItem}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <Button onClick={() => setCurrentUser({})}>Login</Button>
          )}
          <Menu
            menuItems={currentUser ? ACCOUNT_MENU_DUM : MENU_DUM}
            onChange={menuItemChangeHandler}
          >
            {currentUser ? (
              <div className={styles.avatar}>
                <Image src={imgTest} alt="Xuan hoa" />
              </div>
            ) : (
              <button className={styles.menuBtn}>
                <FontAwesomeIcon
                  icon={faEllipsisVertical as IconProp}
                  className={styles.menuIcon}
                />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
