import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '../../Popper';
import { useState } from 'react';
import Header from './Header';

export interface MenuItemProps {
  icon: string;
  title: string;
  url?: string;
  children?: { title: string; data: { [index: string]: any } };
  onClick?: () => void;
  separate?: boolean;
}

interface MenuProps {
  children: React.ReactElement;
  menuItems: MenuItemProps[];
  onChange: (item: MenuItemProps) => void;
}

const Menu = ({ children, menuItems, onChange }: MenuProps) => {
  const [history, setHistory] = useState<any[]>([{ data: menuItems }]);
  const current = history[history.length - 1];
  return (
    <Tippy
      onHidden={() => setHistory([{ data: menuItems }])}
      placement="bottom-end"
      delay={[0, 500]}
      interactive
      render={() => {
        return (
          <PopperWrapper
            className={styles.menuPopper}
            header={() =>
              history.length > 1 ? (
                <Header
                  title={current.title}
                  onBack={() =>
                    setHistory((prev) => prev.slice(0, prev.length - 1))
                  }
                />
              ) : undefined
            }
          >
            {current.data.map((item: MenuItemProps, i: number) => {
              return (
                <MenuItem
                  key={i}
                  {...item}
                  onClick={
                    item.children
                      ? () => {
                          setHistory((prev) => prev.concat([item.children]));
                        }
                      : () => onChange(item)
                  }
                />
              );
            })}
          </PopperWrapper>
        );
      }}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
