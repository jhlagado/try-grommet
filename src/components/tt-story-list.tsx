import * as React from 'react';
import { useState, useEffect } from 'react';
import { getTopStoryIds, getStoryItem } from '../apis';
import { Story } from './story';
import styled from 'styled-components';
import { StoryItem, Stylable } from '../types';

const compareFn = (a: StoryItem, b: StoryItem) => b.score - a.score;

const BaseTTStoryList = ({ className }: Stylable) => {
  const [topStories, setTopStories] = useState<StoryItem[]>([]);

  useEffect(() => {
    let mounted = true;
    getTopStoryIds().then(ids => {
      const items: StoryItem[] = [];
      let lowest: StoryItem | null = null;
      for (const id of ids.slice(0, 100)) {
        getStoryItem(id).then(item => {
          if (!mounted || !item) return;
          const story = item as StoryItem;
          if (!lowest) {
            lowest = story;
          }
          if (story.score >= lowest.score) {
            items.push(story);
            items.sort(compareFn);
            const topTen = items.slice(0, 10);
            lowest = topTen.reduce(
              (acc, item) => (item.score < acc.score ? item : acc),
              items[0],
            );
            setTopStories(topTen);
          }
        });
      }
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

export const TTStoryList = styled(BaseTTStoryList)``;
