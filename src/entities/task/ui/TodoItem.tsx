import { DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input } from 'antd';
import React, { ChangeEvent, useState } from 'react';

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
  const [editMode, setEditMode] = useState<Boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // onChangeTodoItemDescription(id, e.currentTarget.value);
  };

  const onBlurEffect = () => {
    setEditMode(false);
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <Col span={6}>
      <Card hoverable style={{ minWidth: '250px' }}>
        {editMode ? (
          <Input
            autoFocus
            onBlur={onBlurEffect}
            value={description}
            onChange={handleInputChange}
          />
        ) : (
          <span onClick={handleEditMode}>{description}</span>
        )}

        <S.MetaWrapper>
          <span>{dateOfCreate}</span>

          <Button icon={<DeleteOutlined />} size="small" />
        </S.MetaWrapper>
      </Card>
    </Col>
  );
};
