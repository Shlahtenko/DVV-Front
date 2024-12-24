import { Button, Card, Flex, Input, List, Select } from 'antd';
import { useState } from 'react';

import { updateUser } from '@/core/api/user';
import { profileOptions as options } from '@/ui/constants';
import useMutate from '@/ui/hooks/useMutate';

import styles from '../profile.module.scss';

const ProfileCard = ({ data, tempData, setTempData }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { mutate } = useMutate({
    fetcher: updateUser,
    onSuccess: (responseData) => {
      if (responseData?.data) {
        setTempData(responseData.data);
      }
    },
    onError: (error) => {
      setTempData(data);
      console.error('Failed to patch user:', error);
    },
  });

  const handleSave = () => {
    mutate(tempData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData(data);
    setIsEditing(false);
  };

  const handleTempChange = (key, value) => {
    setTempData((prev) => ({ ...prev, [key]: value }));
  };

  const listColumns = [
    { key: 'email', title: 'Електронна пошта', value: tempData?.email },
    {
      key: 'faculty',
      title: 'Факультет',
      value: tempData?.faculty,
      options: options.faculty,
    },
    {
      key: 'specialty',
      title: 'Спеціальність',
      value: tempData?.specialty,
      options: options.specialty,
    },
    {
      key: 'grade',
      title: 'Ступінь',
      value: tempData?.grade,
      options: options.grade,
    },
    {
      key: 'course',
      title: 'Курс',
      value: tempData?.course,
      options: options.course,
    },
    {
      key: 'form',
      title: 'Форма навчання',
      value: tempData?.form,
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
                      value={tempData[key]}
                      onChange={(e) => handleTempChange(key, e.target.value)}
                    />
                  ) : (
                    <Select
                      className={styles.dropdown}
                      value={tempData[key]}
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
