import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ScrollToTop } from '../utils';
import { Box } from 'grommet';

interface FormErrors {
  email?: string;
  password?: string;
}

export const FormikForm = () => {
  return (
    <>
      <ScrollToTop />
      <Box width="medium">
        <Formik
          initialValues={{
            email: '',
            password: '',
            zone: 'ap-southeast-2a',
            remember: false,
          }}
          validate={values => {
            const errors: FormErrors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(false);
            const result = await fetch('http://localhost:2334/v1/demo/stuff', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });
            try {
              const data = await result.json();
              console.log(data);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="pure-form pure-form-stacked">
              <fieldset>
                <legend>Login into the system</legend>
                <label htmlFor="email">Email</label>
                <Field id="email" type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <label htmlFor="password">Password</label>
                <Field id="password" type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <label htmlFor="az">Zone</label>
                <Field as="select" name="az" id="az">
                  <option value="ap-southeast-2a">SouthEast 2A</option>
                  <option value="ap-southeast-2b">SouthEast 2B</option>
                  <option value="ap-southeast-2c">SouthEast 2C</option>
                </Field>
                <label className="pure-checkbox">
                  <Field id="remember" type="checkbox" name="remember" />{' '}
                  Remember me
                </label>
                <button
                  type="submit"
                  className="pure-button pure-button-primary"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </fieldset>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};
