import * as React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { Comment } from './comment';
import { oneCommentItem } from '../fixtures';

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

test('will render comment', async () => {
  const { getByText, getAllByTestId } = render(
    <Comment item={oneCommentItem} />,
  );

  await waitForElement(() => [
    getByText('https://github.com/samyk/poisontap'),
    getAllByTestId('id-by'),
  ]);
});
