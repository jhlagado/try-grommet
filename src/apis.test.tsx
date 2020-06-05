import { cleanup } from '@testing-library/react';
import { getTopStoryIds, getStoryItem } from './apis';
import { baseUrl } from './constants';

const fakeFetch = jest.fn();
window.fetch = fakeFetch;

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

test('will fetch top story ids', async () => {
  (fetch as jest.Mock).mockImplementation(() =>
    Promise.resolve({ json: () => Promise.resolve({ x: 123 }) }),
  );

  await getTopStoryIds();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(`${baseUrl}topstories.json`);
});

test('will fetch story', async () => {
  (fetch as jest.Mock).mockImplementation(() =>
    Promise.resolve({ json: () => Promise.resolve({ x: 123 }) }),
  );

  await getStoryItem(2);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(`${baseUrl}item/2.json`);
});
