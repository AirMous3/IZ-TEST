import { Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

import { TodoItem, todosSelector } from '@/entities/task';

export const Todolist: React.FC = () => {
  const todos = useSelector(todosSelector);

  return (
    <Row gutter={[16, 16]} justify="center">
      {todos.map(({ id, date, description }) => (
        <TodoItem
          key={id}
          description={description}
          dateOfCreate={date}
          id={id}
        />
      ))}
    </Row>
  );
};
