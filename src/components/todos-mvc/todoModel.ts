import { uuid, extend } from './utils';
import { TodoData } from './types';

let todos: TodoData[] = [];

const addTodo = (title: string) => {
  todos = todos.concat({
    id: uuid(),
    title: title,
    completed: false,
  });

  inform();
};

const toggleAll = (checked: boolean) => {
  // Note: It's usually better to use immutable data structures since they're
  // easier to reason about and React works very well with them. That's why
  // we use map(), filter() and reduce() everywhere instead of mutating the
  // array or todo items themselves.
  todos = todos.map((todo: TodoData) => {
    return extend({}, todo, { completed: checked });
  });

  inform();
};

const toggle = (todoToToggle: TodoData) => {
  todos = todos.map((todo: TodoData) => {
    return todo !== todoToToggle
      ? todo
      : extend({}, todo, { completed: !todo.completed });
  });

  inform();
};

const destroy = (todo: TodoData) => {
  todos = todos.filter(function(candidate) {
    return candidate !== todo;
  });

  inform();
};

const save = (todoToSave: TodoData, text: string) => {
  todos = todos.map(function(todo) {
    return todo !== todoToSave ? todo : extend({}, todo, { title: text });
  });

  inform();
};

const clearCompleted = () => {
  todos = todos.filter(function(todo) {
    return !todo.completed;
  });

  inform();
};
