import React from 'react';
import styles from './Button.module.scss';
import cslx from 'clsx';
import { Link } from 'react-router-dom';

interface ButtonProps {
  [index: string]: (() => void) | any;
  to?: string;
  children: React.ReactNode;
  href?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'primary' | 'outline-primary' | 'rounded' | 'text' | 'outline';
  className?: string;
  disabled?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

const Button = ({
  children,
  size = 'medium',
  type = 'primary',
  href,
  to = '',
  className = '',
  disabled,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}: ButtonProps) => {
  const style = cslx(styles.wrapper, {
    [styles[size]]: size,
    [styles[type]]: type,
    [styles.disabled]: disabled,
    [className]: className,
  });
  const props: { to: string } & {
    [Prop in keyof ButtonProps as Exclude<
      Prop,
      'size' | 'type' | 'children' | 'disabled' | 'leftIcon' | 'rightIcon'
    >]: ButtonProps[Prop];
  } = { onClick, ...passProps, className: style, to };

  if (disabled) {
    Object.keys(passProps).forEach((key) => {
      if (key.startsWith('on')) {
        delete props[key];
      }
    });
  }

  let Comp: typeof Link | string = 'button';

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <Comp {...props}>
      <span className={styles.leftIcon}>{leftIcon}</span>
      <span className={styles.content}>{children}</span>
      <span className={styles.rightIcon}>{rightIcon}</span>
    </Comp>
  );
};

export default Button;
