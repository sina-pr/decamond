'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/features/Header/Header';
import styles from './layout.module.scss';
import Loader from '@/components/ui/Loader/Loader';
import { useAuth } from '@/hooks/useAuth';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Wait until the auth state is determined
    if (isLoading) {
      return;
    }

    // If not authenticated, redirect to the login page
    if (!isAuthenticated) {
      router.replace('/auth');
    }
  }, [isAuthenticated, isLoading, router]);

  // While loading, or if not authenticated (before redirect happens),
  // show a loader or an empty fragment to prevent flashing content.
  if (isLoading || !isAuthenticated) {
    // Use the new Loader component while checking auth
    return <Loader fullPage text='Verifying Access...' />;
  }

  // If authenticated, show the layout with the header
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}
