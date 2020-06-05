import * as React from 'react';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import { ScrollToTop } from '../utils';
import { Stylable } from '../types';
import { TodoList } from '../components/recoil-todos/todo-list';

const BaseRecoilTodos = ({ className }: Stylable) => {
  return (
    <div id="main">
      <ScrollToTop />
      <div className="header">
        <h1>Recoil Todos</h1>
        <h2>list of recoil todos</h2>
      </div>
      <div className={`content ${className}`}>
        <RecoilRoot>
          <TodoList />
        </RecoilRoot>
      </div>
    </div>
  );
};

export const RecoilTodos = styled(BaseRecoilTodos)``;
RecoilTodos.displayName = 'RecoilTodos';
