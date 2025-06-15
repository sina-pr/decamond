import React from 'react';
import styles from './Button.module.scss';

// Defines the props for the component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary'; // Defines the button's style
  isLoading?: boolean; // Shows a loading state
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  className,
  ...props
}) => {
  // Combines the style classes
  const buttonClassName = `
    ${styles.button} 
    ${styles[variant]} 
    ${isLoading ? styles.loading : ''}
    ${className || ''}
  `;

  return (
    <button className={buttonClassName.trim()} disabled={isLoading} {...props}>
      {isLoading ? <span className={styles.spinner}></span> : children}
    </button>
  );
};

export default Button;
