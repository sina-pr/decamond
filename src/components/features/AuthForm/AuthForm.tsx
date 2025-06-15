'use client';

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import styles from './AuthForm.module.scss';

const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^09\d{9}$/, 'Invalid phone number format')
    .required('Phone number is required'),
});

interface AuthFormProps {
  onSubmit: (values: { phoneNumber: string }) => Promise<void>;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit }) => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Login to Your Account</h2>
      <p className={styles.subtitle}>Enter your phone number to continue.</p>

      <Formik
        initialValues={{ phoneNumber: '' }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Field
              name='phoneNumber'
              as={Input}
              label='Phone Number'
              type='tel'
              placeholder='e.g., 09123456789'
              error={touched.phoneNumber && errors.phoneNumber}
            />

            <Button
              type='submit'
              variant='primary'
              isLoading={isSubmitting}
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
