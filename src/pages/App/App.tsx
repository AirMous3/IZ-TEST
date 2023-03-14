import { Row } from 'antd';
import React from 'react';

import { TodoItem } from '@/entities/task';

import * as S from './components';

export const App: React.FC = () => {
  return (
    <S.AContainer>
      <h1>TODO-list</h1>
      <Row gutter={[16, 16]} justify="center">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </Row>
    </S.AContainer>
  );
};
