import * as React from 'react';
import styled from 'styled-components';

import { FTStoryList } from '../components/story-lists/ft-story-list';
import { ScrollToTop } from '../utils';

const BaseFirstTen = () => {
  return (
    <div id="main">
      <ScrollToTop />
      <div className="header">
        <h1>Hacker News Reader</h1>
        <h2>First ten top stories</h2>
      </div>
      <div className="content">
        <FTStoryList />
      </div>
    </div>
  );
};

export const FirstTen = styled(BaseFirstTen)``;
FirstTen.displayName = 'FirstTen';
