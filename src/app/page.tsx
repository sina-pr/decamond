'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/ui/Loader/Loader';
import { useAuth } from '@/hooks/useAuth';

// This component acts as an intelligent entry point for the application.
const RootPage = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Wait until the auth state has been determined.
    if (isLoading) {
      return;
    }

    // Once loading is finished, redirect the user.
    if (isAuthenticated) {
      router.replace('/dashboard'); // User is logged in.
    } else {
      router.replace('/auth'); // User is not logged in.
    }
  }, [isAuthenticated, isLoading, router]);

  return <Loader fullPage text='Loading Session...' />;
};

export default RootPage;
