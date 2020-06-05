import * as React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Stylable } from '../../types';
import { todoListStatsState } from './selectors';
import { TodoItemStatsData } from './atoms';

const BaseTodoListStats = ({ className }: Stylable) => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue<TodoItemStatsData>(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <ul className={`todo-list-stats ${className}`}>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
};

export const TodoListStats = styled(BaseTodoListStats)``;
TodoListStats.displayName = 'TodoListStats';
