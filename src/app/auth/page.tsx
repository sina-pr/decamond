'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { fetchRandomUser } from '@/lib/api';
import AuthForm from '@/components/features/AuthForm/AuthForm';
import styles from './page.module.scss';
import { useAuth } from '@/hooks/useAuth';

const AuthPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      // 1. Fetch user data from the API
      const userData = await fetchRandomUser();

      // 2. Save user data in global context and localStorage
      login(userData);

      // 3. Redirect to the dashboard
      router.push('/dashboard');
    } catch (error) {
      // Handle potential errors from the API call
      alert('something went wrong, try again');
      console.error(error);
    }
  };

  return (
    <main className={styles.container}>
      <AuthForm onSubmit={handleLogin} />
    </main>
  );
};

export default AuthPage;
