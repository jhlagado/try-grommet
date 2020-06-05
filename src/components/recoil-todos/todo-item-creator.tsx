import * as React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import { useState } from 'react';
import { Stylable } from '../../types';
import { TodoItemData, todoListState } from './atoms';

let id = 0;
const getId = () => {
  return id++;
};

const BaseTodoItemCreator = ({ className }: Stylable) => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState<TodoItemData[]>(todoListState);
  const addItem = () => {
    setTodoList((oldTodoList: TodoItemData[]) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
  };

  const onChange = ({ target: { value } }: any) => {
    setInputValue(value);
  };

  return (
    <form className={`todo-item-creator ${className} pure-form pure-form-stacked`}>
      <input type="text" value={inputValue} onChange={onChange} />
      <button type="button" onClick={addItem} className="pure-button pure-button-primary">Add</button>
    </form>
  );
};

export const TodoItemCreator = styled(BaseTodoItemCreator)``;
TodoItemCreator.displayName = 'TodoItemCreator';
