import React from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
  fullPage?: boolean;
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ fullPage = false, text }) => {
  // Apply a modifier class if the loader should take up the full page
  const containerClassName = `
    ${styles.loaderContainer}
    ${fullPage ? styles.fullPage : ''}
  `;

  return (
    <div className={containerClassName.trim()}>
      <div className={styles.spinner}></div>
      {text && <p className={styles.loaderText}>{text}</p>}
    </div>
  );
};

export default Loader;
