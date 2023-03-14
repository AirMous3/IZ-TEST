import { CheckOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import React from 'react';

import * as S from './components';

export const AddTodoItemForm: React.FC = () => {
  return (
    <S.Container>
      <Input placeholder="Добавить задачу" />
      <Button icon={<CheckOutlined />} />
    </S.Container>
  );
};
