import { atom } from 'recoil';

export interface TodoItemData {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<TodoItemData[]>({
  key: 'todoListState',
  default: [],
});

export type FilterEnum = 'Show All' | 'Show Completed' | 'Show Uncompleted';

export const todoListFilterState = atom<FilterEnum>({
  key: 'todoListFilterState',
  default: 'Show All',
});

export interface TodoItemStatsData {
  totalNum: number;
  totalCompletedNum: number;
  totalUncompletedNum: number;
  percentCompleted: number;
}
