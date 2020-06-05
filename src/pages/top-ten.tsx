import * as React from 'react';

import { TTStoryList } from '../components/story-lists/tt-story-list';
import { ScrollToTop } from '../utils';
import { Box } from 'grommet';

export const TopTen = () => {
  return (
    <>
      <ScrollToTop />
      <Box width="medium">
        <h1>Hacker News Reader</h1>
        <h2>Top ten stories</h2>
        <TTStoryList />
      </Box>
    </>
  );
};
