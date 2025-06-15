// src/app/(main)/dashboard/page.tsx
'use client';

import React from 'react';
import { useAuth } from '../../../hooks/useAuth'; // Updated import path
import Avatar from '../../../components/ui/Avatar/Avatar';
import styles from './page.module.scss';

const DashboardPage = () => {
  const { user } = useAuth();

  // Show a simple loading state or return null if user data isn't available yet.
  // The layout's loader will likely handle this, but it's good practice.
  if (!user) {
    return null;
  }

  const userName = `${user.name.first} ${user.name.last}`;

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.welcomeCard}>
        <h1 className={styles.welcomeTitle}>
          Welcome, <span className={styles.userName}>{userName}!</span>
        </h1>
        <p className={styles.email}>{user.email}</p>
        <p className={styles.infoText}>
          This is your protected dashboard. All of your application content will
          be accessible from here.
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
