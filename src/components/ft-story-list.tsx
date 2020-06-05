import * as React from 'react';
import { useState, useEffect } from 'react';
import { getTopStoryIds, getStoryItem } from '../apis';
import { Story } from './story';
import styled from 'styled-components';
import { StoryItem, Stylable } from '../types';

const compareFn = (a: StoryItem, b: StoryItem) => b.score - a.score;

const BaseFTStoryList = ({ className }: Stylable) => {
  const [topStories, setTopStories] = useState<StoryItem[]>([]);

  useEffect(() => {
    let mounted = true;
    getTopStoryIds().then(ids => {
      const items: StoryItem[] = [];
      ids.slice(0, 10).forEach(async id => {
        const item = await getStoryItem(id);
        if (!mounted || !item) return;
        const story = item as StoryItem;
        items.push(story);
        items.sort(compareFn);
        setTopStories([...items]);
      });
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className={`${className} story-list`}>
      <div>
        {topStories?.map(story => (
          <Story key={story.id} item={story} />
        ))}
      </div>
    </div>
  );
};

export const FTStoryList = styled(BaseFTStoryList)``;
