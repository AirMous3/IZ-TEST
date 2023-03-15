import { CheckOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addTaskToList } from '@/entities';

import * as S from './components';

export const AddTodoItemForm: React.FC = () => {
  const dispatch = useDispatch();
  const [inputState, setInputState] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState(e.currentTarget.value);
  };

  const handleButtonClick = () => {
    if (inputState.length === 0) return;

    const task = {
      id: uuidv4(),
      description: inputState,
      date: new Date().toLocaleDateString(),
    };

    dispatch(addTaskToList({ task }));

    setInputState('');
  };

  return (
    <S.Container>
      <Input
        placeholder="Добавить задачу"
        value={inputState}
        onChange={handleInputChange}
        onPressEnter={handleButtonClick}
      />
      <Button icon={<CheckOutlined />} onClick={handleButtonClick} />
    </S.Container>
  );
};
