import { Button, Card, Flex, Input, List, Select } from 'antd';
import { useState } from 'react';

import { updateUser } from '@/core/api/user';
import { profileOptions as options } from '@/ui/constants';
import useMutate from '@/ui/hooks/useMutate';

import styles from '../profile.module.scss';

const ProfileCard = ({ data, editableData, setEditableData, refetch }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { mutate } = useMutate({
    fetcher: updateUser,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      setEditableData(data);
      console.error('Failed to patch user:', error);
    },
  });

  const handleSave = () => {
    mutate(editableData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditableData(data);
    setIsEditing(false);
  };

  const handleTempChange = (key, value) => {
    setEditableData((prev) => ({ ...prev, [key]: value }));
  };

  const listColumns = [
    { key: 'email', title: 'Електронна пошта', value: editableData?.email },
    {
      key: 'faculty',
      title: 'Факультет',
      value: editableData?.faculty,
      options: options.faculty,
    },
    {
      key: 'specialty',
      title: 'Спеціальність',
      value: editableData?.specialty,
      options: options.specialty,
    },
    {
      key: 'grade',
      title: 'Ступінь',
      value: editableData?.grade,
      options: options.grade,
    },
    {
      key: 'course',
      title: 'Курс',
      value: editableData?.course,
      options: options.course,
    },
    {
      key: 'form',
      title: 'Форма навчання',
      value: editableData?.form,
      options: options.form,
    },
  ];

  return (
    <Card>
      <List
        className={styles.list}
        dataSource={listColumns}
        renderItem={({ key, title, value, options }) => (
          <List.Item key={key}>
            <Flex className={styles.listItem} flex={1}>
              <Flex>{title}:</Flex>
              <Flex className={styles.data}>
                {isEditing ? (
                  key === 'email' ? (
                    <Input
                      value={editableData[key]}
                      onChange={(e) => handleTempChange(key, e.target.value)}
                    />
                  ) : (
                    <Select
                      className={styles.dropdown}
                      value={editableData[key]}
                      options={options}
                      onChange={(value) => handleTempChange(key, value)}
                    />
                  )
                ) : (
                  <Flex>{value}</Flex>
                )}
              </Flex>
            </Flex>
          </List.Item>
        )}
      >
        {!isEditing ? (
          <Flex className={styles.actions} align="center" justify="flex-end">
            <Button onClick={() => setIsEditing((prev) => !prev)}>
              Редагувати
            </Button>
          </Flex>
        ) : (
          <Flex
            className={styles.actions}
            align="center"
            justify="flex-end"
            gap="small"
          >
            <Button onClick={handleSave}>Зберегти</Button>
            <Button onClick={handleCancel}>Скасувати</Button>
          </Flex>
        )}
      </List>
    </Card>
  );
};

export default ProfileCard;
