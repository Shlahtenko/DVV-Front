import { Button, Card, Col, Flex, List, Row } from 'antd';
import { useState } from 'react';

import Heading from '@/ui/components/heading';
import Text from '@/ui/components/text';

import styles from './profile.module.scss';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const list = [
    { title: 'Електронна пошта:', value: '' },
    { title: 'Факультет:', value: '' },
    { title: 'Спеціальність:', value: '' },
    { title: 'Ступінь:', value: '' },
    { title: 'Курс:', value: '' },
    { title: 'Форма навчання:', value: '' },
  ];

  const votedsubjects = [
    {
      title: 'Електронна пошта',
    },
    { title: 'Факультет:' },
    { title: 'Спеціальність:' },
    { title: 'Ступінь:' },
    { title: 'Курс:' },
    { title: 'Форма навчання:' },
  ];

  const voted = false;

  return (
    <Flex className={styles.profile} align="center" gap="large" vertical>
      <Heading text="Шляхтенко Іван" />
      <List
        className={styles.list}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <Flex>{item.title}</Flex>
            <Flex>{item.value}</Flex>
          </List.Item>
        )}
      >
        <Flex align="center" justify="flex-end">
          {!isEditing ? (
            <Button onClick={() => setIsEditing((prev) => !prev)}>
              Редагувати
            </Button>
          ) : (
            <Button onClick={() => setIsEditing((prev) => !prev)}>
              Зберегти
            </Button>
          )}
        </Flex>
      </List>
      {voted ? (
        <Flex className={styles.vote} align="center" justify="space-between">
          <Text text="Вам потрібно обрати дисципліни вільного вибору"></Text>
          <Button type="primary">Обрати</Button>
        </Flex>
      ) : (
        <Flex className={styles.cards} gap="large" align="center" vertical>
          <Heading text="Обрані дисципліни вільного вибору:" />
          <Row gutter={[16, 16]} justify="center">
            {votedsubjects.map((item) => (
              <Col key={item.id} xs={24} sm={12}>
                <Card style={{ textAlign: 'center' }}>{item.title}</Card>
              </Col>
            ))}
          </Row>
        </Flex>
      )}

      <Button type="primary" danger>
        Вийти з акаунту
      </Button>
    </Flex>
  );
};

export default Profile;
