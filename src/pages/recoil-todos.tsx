import * as React from 'react';
import { RecoilRoot } from 'recoil';
import { ScrollToTop } from '../utils';
import { TodoList } from '../components/recoil-todos/todo-list';
import { Box } from 'grommet';

export const RecoilTodos = () => {
  return (
    <>
      <ScrollToTop />
      <Box width="medium">
        <RecoilRoot>
          <TodoList />
        </RecoilRoot>
      </Box>
    </>
  );
};
