import * as React from 'react';
import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
} from '@testing-library/react';
import { Story } from './story';
import { oneCommentItem, oneStoryItem } from '../fixtures';
import { getCommentItem } from '../apis';

jest.mock('../apis', () => ({
  getCommentItem: jest.fn(),
}));

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

test('will render app', async () => {
  (getCommentItem as jest.Mock).mockImplementation((id: number) =>
    Promise.resolve({
      ...oneCommentItem,
      id,
      score: id ** 2,
    }),
  );
  const { getByText, getAllByText, getAllByTestId } = render(
    <Story item={oneStoryItem} />,
  );

  await waitForElement(() => [
    getByText('What Is Nix?'),
    getAllByTestId('id-by'),
    getAllByText('4 comments'),
  ]);
  const button = getByText('4 comments');
  fireEvent.click(button);
  await waitForElement(() => [getAllByTestId('id-comment')]);
});
