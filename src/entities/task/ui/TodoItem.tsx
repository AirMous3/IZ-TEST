import { DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input } from 'antd';
import React, { useState } from 'react';

export const TodoItem: React.FC = () => {
  const [editMode, setEditMode] = useState<Boolean>(false);

  return (
    <Col span={6}>
      <Card hoverable>
        {editMode ? (
          <Input autoFocus onBlur={() => setEditMode(false)} />
        ) : (
          <span
            onClick={() => {
              setEditMode(!editMode);
            }}
          >
            fdlsfkd ;lsfdl;sk f;dskfd;s fdskf;lsd kflsd kfsdl;fksd;fk sd;fklsdd
            dsadsa dsa dsad sads adsa d as das dsa ds adasjdsajk daskdhaskjd
            sadshd sa dsa dsadsadkl;dsakl;dskalkl;das dkasl;kl;das;ld;lska
            dksl;aldk as;dklsaak
          </span>
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '25px',
          }}
        >
          <span>{new Date().toLocaleTimeString()}</span>

          <Button icon={<DeleteOutlined />} size="small" />
        </div>
      </Card>
    </Col>
  );
};
