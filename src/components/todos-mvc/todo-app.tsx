import * as React from 'react';
import { useState } from 'react';

import { TodoModel } from './todoModel';
import { TodoFooter } from './footer';
import { TodoItem } from './todoItem';
import {
  ALL_TODOS,
  ACTIVE_TODOS,
  COMPLETED_TODOS,
  ENTER_KEY,
} from './constants';

import { TodoData } from './types';


export const TodoApp = () => {
  const [nowShowing, setNowShowing] = useState(ALL_TODOS);
  const [editing, setEditing] = useState<string | null>(null);

  // const handleNewTodoKeyDown = (event : any) => {
  //   if (event.keyCode !== ENTER_KEY) {
  //     return;
  //   }

  //   event.preventDefault();

  //   var val = React.findDOMNode<HTMLInputElement>(refs["newField"]).value.trim();

  //   if (val) {
  //     model.addTodo(val);
  //     React.findDOMNode<HTMLInputElement>(refs["newField"]).value = '';
  //   }
  // }

  const toggleAll = (event: any) => {
    const target: any = event.target;
    const checked = target.checked;
    model.toggleAll(checked);
  };

  const toggle = (todoToToggle: TodoData) => {
    model.toggle(todoToToggle);
  };

  const destroy = (todo: TodoData) => {
    model.destroy(todo);
  };

  const edit = (todo: TodoData) => {
    setEditing(todo.id);
  };

  const save = (todoToSave: TodoData, text: string) => {
    model.save(todoToSave, text);
    setEditing(null);
  };

  const cancel = () => {
    setEditing(null);
  };

  const clearCompleted = () => {
    model.clearCompleted();
  };

  let footer;
  let main;
  const todos = model.todos;

  const shownTodos = todos.filter(todo => {
    switch (nowShowing) {
      case ACTIVE_TODOS:
        return !todo.completed;
      case COMPLETED_TODOS:
        return todo.completed;
      default:
        return true;
    }
  });

  const todoItems = shownTodos.map(todo => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggle={toggle}
        onDestroy={destroy}
        onEdit={edit}
        editing={editing}
        onSave={save}
        onCancel={cancel}
      />
    );
  });

  const activeTodoCount = todos.reduce(function(accum, todo) {
    return todo.completed ? accum : accum + 1;
  }, 0);

  const completedCount = todos.length - activeTodoCount;

  if (activeTodoCount || completedCount) {
    footer = (
      <TodoFooter
        count={activeTodoCount}
        completedCount={completedCount}
        nowShowing={nowShowing}
        onClearCompleted={clearCompleted}
      />
    );
  }

  if (todos.length) {
    main = (
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={e => toggleAll(e)}
          checked={activeTodoCount === 0}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">{todoItems}</ul>
      </section>
    );
  }

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <input
          // ref="newField"
          className="new-todo"
          placeholder="What needs to be done?"
          // onKeyDown={ e => handleNewTodoKeyDown(e) }
          autoFocus={true}
        />
      </header>
      {main}
      {footer}
    </div>
  );
};
