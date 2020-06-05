import * as React from 'react';
import styled from 'styled-components';

import { TTStoryList } from '../components/tt-story-list';
import { ScrollToTop } from '../utils';

const BaseTopTen = () => {
  return (
    <div id="main">
      <ScrollToTop />
      <div className="header">
        <h1>Hacker News Reader</h1>
        <h2>Top ten stories</h2>
      </div>
      <div className="content">
        <TTStoryList />
      </div>
    </div>
  );
};

export const TopTen = styled(BaseTopTen)``;
TopTen.displayName = 'TopTen';
