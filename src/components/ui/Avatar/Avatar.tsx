'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Avatar.module.scss';

interface AvatarProps {
  src: string | null | undefined;
  alt: string;
  size?: number; // Size in pixels (width and height)
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 40 }) => {
  const [hasError, setHasError] = useState(false);

  // Fallback to a default initial if the src is invalid or fails to load
  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    if (nameParts.length > 1) {
      return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div
      className={styles.avatarContainer}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {src && !hasError ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className={styles.avatarImage}
          onError={() => setHasError(true)}
        />
      ) : (
        <div
          className={styles.avatarFallback}
          style={{ fontSize: `${size * 0.4}px` }}
        >
          {getInitials(alt)}
        </div>
      )}
    </div>
  );
};

export default Avatar;
