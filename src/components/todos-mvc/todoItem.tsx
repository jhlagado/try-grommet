import * as React from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';

import { TodoData } from './types';
import { ENTER_KEY, ESCAPE_KEY } from './constants';

interface TodoItemProps {
  title: string;
  key: string;
  todo: TodoData;
  editing?: boolean;
  onSave: (todo: TodoData, val: any) => void;
  onDestroy: (todo: TodoData) => void;
  onEdit: (todo: TodoData) => void;
  onCancel: () => void;
  onToggle: (todo: TodoData) => void;
}

export const TodoItem = ({ title, todo, editing }: TodoItemProps) => {
  const [editText, setEditText] = useState(title);

  const handleSubmit = () => {
    const val = editText.trim();
    if (val) {
      onSave(todo, val);
      setEditText(val);
    } else {
      onDestroy(todo);
    }
  };

  const handleEdit = () => {
    onEdit(todo);
    setEditText(todo.title);
  };

  const handleKeyDown = (event: any) => {
    if (event.keyCode === ESCAPE_KEY) {
      setEditText(todo.title);
      onCancel();
    } else if (event.keyCode === ENTER_KEY) {
      handleSubmit();
    }
  };

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setEditText(value);
  };

  return (
    <li
      className={classNames({
        completed: todo.completed,
        editing: editing,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
        />
        <label onDoubleClick={e => handleEdit()}>{todo.title}</label>
        <button className="destroy" onClick={onDestroy} />
      </div>
      <input
        className="edit"
        value={editText}
        onBlur={handleSubmit}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
};
