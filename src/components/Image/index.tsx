import { useState } from 'react';
import clsx from 'clsx';
import styles from './Image.module.scss';
import fallbackIcon from '../../assets/imgs/avatar-placeholder.png';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  props?: any[];
}

const Image = ({
  src,
  alt,
  className,
  fallback = fallbackIcon,
  ...props
}: ImageProps) => {
  const [_fallback, setFallback] = useState('');

  const classes = clsx(styles.wrapper, className);

  function errorHandler() {
    setFallback(fallback);
  }

  return (
    <img
      src={_fallback || src}
      alt={alt}
      {...props}
      className={classes}
      onError={errorHandler}
    />
  );
};

export default Image;
