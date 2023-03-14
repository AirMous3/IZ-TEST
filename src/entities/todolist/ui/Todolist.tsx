import { Row } from 'antd';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodoItem } from '@/entities/task';


export const Todolist: React.FC = () => {
  const [todos, setTodos] = useState([
    {
      description: 'drink milk and more more more',
      date: new Date().toLocaleTimeString(),
      id: uuidv4(),
    },
    {
      description: 'drink milk and more more more',
      date: new Date().toLocaleTimeString(),
      id: uuidv4(),
    },
    {
      description: 'drink milk and more more more',
      date: new Date().toLocaleTimeString(),
      id: uuidv4(),
    },
    {
      description: 'drink milk and more more more',
      date: new Date().toLocaleTimeString(),
      id: uuidv4(),
    },
    {
      description: 'drink milk and more more more',
      date: new Date().toLocaleTimeString(),
      id: uuidv4(),
    },
  ]);

  const changeTodoItemDescription = (_id: string, _description: string) => {
    setTodos(
      todos.map(({ id, description, date }) =>
        id === _id
          ? {
              id,
              description: _description,
              date,
            }
          : { id, description, date },
      ),
    );
  };

  return (
    <Row gutter={[16, 16]} justify="center">
      {todos.map(({ id, date, description }) => (
        <TodoItem
          key={id}
          description={description}
          dateOfCreate={date}
          id={id}
          onChangeTodoItemDescription={changeTodoItemDescription}
        />
      ))}
    </Row>
  );
};
