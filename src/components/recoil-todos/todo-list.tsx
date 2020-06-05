import * as React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { TodoItemCreator } from './todo-item-creator';
import { Stylable } from '../../types';
import { TodoItem } from './todo-item';
import { TodoListFilters } from './todo-list-filters';
import { TodoListStats } from './todo-list-stats';
import { filteredTodoListState } from './selectors';

const BaseTodoList = ({ className }: Stylable) => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div className={`todo-list ${className}`}>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <form className="pure-form">
        <table className="pure-table">
          <tbody>
            {todoList.map(todoItem => (
              <TodoItem key={todoItem.id} item={todoItem} />
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export const TodoList = styled(BaseTodoList)``;
TodoList.displayName = 'TodoList';
