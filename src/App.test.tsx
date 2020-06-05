import * as React from 'react';
import {
  // render,
  cleanup,
  // waitForElement,
  // fireEvent,
} from '@testing-library/react';
// import { App } from './App';
// import { storyIds, oneStoryItem } from './fixtures';
// import { getTopStoryIds, getStoryItem } from './apis';

jest.mock('./apis', () => ({
  getTopStoryIds: jest.fn(),
  getStoryItem: jest.fn(),
}));

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

test('will render app', async () => {
  // (getTopStoryIds as any).mockImplementation(() => Promise.resolve(storyIds));
  // (getStoryItem as jest.Mock).mockImplementation((id: number) =>
  //   Promise.resolve({
  //     ...oneStoryItem,
  //     id,
  //     score: id ** 2,
  //   }),
  // );
  // const { getByText, getAllByText, getAllByTestId, getByTestId } = render(<App />);

  // const hambMenuItem = getByTestId('menu-link');
  // const ftMenuItem = getByText('First Top Ten');
  // const infoMenuItem = getByText('Info');

  // fireEvent.click(hambMenuItem);
  // await waitForElement(() => [
  //   getByText('Top ten stories'),
  //   getAllByTestId('id-by'),
  //   getAllByText('4 comments'),
  // ]);
  // fireEvent.click(ftMenuItem);
  // await waitForElement(() => [getByText('First ten top stories')]);
  // fireEvent.click(infoMenuItem);
  // await waitForElement(() => [getByText('Full-stack developer')]);
});
