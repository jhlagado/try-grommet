import * as React from 'react';

import { FTStoryList } from '../components/story-lists/ft-story-list';
import { ScrollToTop } from '../utils';
import { Box } from 'grommet';

export const FirstTen = () => {
  return (
    <>
      <ScrollToTop />
      <Box width="medium">
        <ScrollToTop />
        <div className="header">
          <h1>Hacker News Reader</h1>
          <h2>First ten top stories</h2>
        </div>
        <div className="content">
          <FTStoryList />
        </div>
      </Box>
    </>
  );
};
