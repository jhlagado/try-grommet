import { StyledProps } from 'styled-components';

export interface HashMap<T> {
  [key: string]: T;
}

export type AnyObj = { [key: string]: any };

export type Stylable = StyledProps<{
  className?: string;
  children?: any[];
}>;

export interface HackerNewsItem {
  by: string;
  id: number;
  time: number;
  type: string;
}

export interface CommentItem extends HackerNewsItem {
  kids?: number[];
  parent: number;
  text: string;
}

export interface StoryItem extends HackerNewsItem {
  descendants: number;
  kids: number[];
  score: number;
  title: string;
  url: string;
}
