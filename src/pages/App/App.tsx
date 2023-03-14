import React from 'react';

import { Todolist } from '@/entities';
import { AddTodoItemForm } from '@/features';

import * as S from './components';

export const App: React.FC = () => {
  return (
    <S.AContainer>
      <h1>TODO-list</h1>

      <AddTodoItemForm />

      <Todolist />
    </S.AContainer>
  );
};
