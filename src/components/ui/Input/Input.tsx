import React from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  error,
  className,
  ...props
}) => {
  // Combines style classes for the container
  const containerClassName = `
    ${styles.inputContainer}
    ${error ? styles.error : ''}
    ${className || ''}
  `;

  return (
    <div className={containerClassName.trim()}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input id={name} name={name} className={styles.input} {...props} />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default Input;
