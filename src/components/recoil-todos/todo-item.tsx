import * as React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Stylable } from '../../types';
import {
  TodoItemData,
  todoListState,
} from '../../components/recoil-todos/atoms';

function replaceItemAtIndex(
  arr: TodoItemData[],
  index: number,
  newValue: TodoItemData,
) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: TodoItemData[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

interface TodoItemProps extends Stylable {
  item: TodoItemData;
}

const BaseTodoItem = ({ item, className }: TodoItemProps) => {
  const [todoList, setTodoList] = useRecoilState<TodoItemData[]>(todoListState);
  const index = todoList.findIndex(
    (listItem: TodoItemData) => listItem === item,
  );

  const editItemText = ({ target: { value } }: any) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <tr className={`todo-item ${className}`}>
      <td>
        <input type="text" value={item.text} onChange={editItemText} />
      </td>
      <td>
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
        />
      </td>
      <td>
        <button type="button" onClick={deleteItem}>
          X
        </button>
      </td>
    </tr>
  );
};

export const TodoItem = styled(BaseTodoItem)``;
TodoItem.displayName = 'TodoItem';
