import * as React from 'react';
import { useState } from 'react';
import { ScrollToTop } from '../utils';
import {
  Form,
  FormField,
  TextInput,
  MaskedInput,
  CheckBox,
  RadioButtonGroup,
  Select,
  TextArea,
  RangeInput,
  Box,
  Button,
} from 'grommet';

const defaultValue = {
  name: '',
  email: '',
  subscribe: false,
  ampm: '',
  size: '',
  comments: '',
  age: '',
};

export const GrommetForm = () => {
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <ScrollToTop />
      <Box width="medium">
        <Form
          value={value}
          onChange={(nextValue: any) => {
            console.log('Change', nextValue);
            setValue(nextValue);
          }}
          onReset={() => setValue(defaultValue)}
          onSubmit={(event: any) =>
            console.log('Submit', event.value, event.touched)
          }
        >
          <FormField label="Name" name="name">
            <TextInput name="name" />
          </FormField>
          <FormField label="Email" name="email" required>
            <MaskedInput
              name="email"
              mask={[
                { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                { fixed: '@' },
                { regexp: /^[\w]+$/, placeholder: 'my' },
                { fixed: '.' },
                { regexp: /^[\w]+$/, placeholder: 'com' },
              ]}
            />
          </FormField>
          <FormField name="subscribe">
            <CheckBox name="subscribe" label="Subscribe?" />
          </FormField>
          <FormField name="ampm">
            <RadioButtonGroup name="ampm" options={['morning', 'evening']} />
          </FormField>
          <FormField label="Size" name="size">
            <Select name="size" options={['small', 'medium', 'large']} />
          </FormField>
          <FormField label="Comments" name="comments">
            <TextArea name="comments" />
          </FormField>
          <FormField label="Age" name="age" pad>
            <RangeInput name="age" min={15} max={75} />
          </FormField>
          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button label="Cancel" />
            <Button type="reset" label="Reset" />
            <Button type="submit" label="Update" primary />
          </Box>
        </Form>
      </Box>
    </>
  );
};
