import * as React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Stylable } from '../../types';
import { todoListFilterState } from './atoms';

const BaseTodoListFilters = ({ className }: Stylable) => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }: any) => {
    setFilter(value);
  };

  return (
    <form className={`todo-list-filters ${className} pure-form`}>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </form>
  );
};

export const TodoListFilters = styled(BaseTodoListFilters)``;
TodoListFilters.displayName = 'TodoListFilters';
