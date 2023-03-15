import { DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Input } from 'antd';
import React, { ChangeEvent, useState } from 'react';

import { useAppDispatch } from '@/app';
import { changeTaskDescription, removeTask } from '@/entities';

import * as S from './components';


export interface TodoItemInterface {
  dateOfCreate: string;
  description: string;
  id: string;
}

export const TodoItem: React.FC<TodoItemInterface> = ({
  dateOfCreate,
  description,
  id,
}) => {
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState<Boolean>(false);
  const [inputState, setInputState] = useState<string>(description);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState(e.currentTarget.value);
  };

  const handleTaskDescriptionChange = () => {
    if (inputState.length === 0) return;
    dispatch(changeTaskDescription({ id, description: inputState }));
    setEditMode(false);
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleTaskDelete = () => {
    dispatch(removeTask({ id }));
  };

  return (
    <Col span={16}>
      <S.TodoItemCard hoverable>
        {editMode ? (
          <Input
            autoFocus
            onBlur={handleTaskDescriptionChange}
            value={inputState}
            onChange={handleInputChange}
            onPressEnter={handleTaskDescriptionChange}
          />
        ) : (
          <span onClick={handleEditMode}>{description}</span>
        )}

        <S.MetaWrapper>
          <span>{dateOfCreate}</span>

          <Button
            icon={<DeleteOutlined />}
            size="small"
            onClick={handleTaskDelete}
          />
        </S.MetaWrapper>
      </S.TodoItemCard>
    </Col>
  );
};
