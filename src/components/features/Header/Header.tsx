'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../../ui/Button/Button';
import Avatar from '../../ui/Avatar/Avatar';
import styles from './Header.module.scss';
import { useAuth } from '@/hooks/useAuth';

const Header = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/auth');
  };

  if (!user) {
    return null;
  }

  const userName = `${user.name.first} ${user.name.last}`;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Dashboard</div>
      <div className={styles.userInfo}>
        <Avatar src={user.picture.large} alt={userName} size={40} />
        <span className={styles.userName}>{userName}</span>
        <Button onClick={handleLogout} variant='secondary'>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
