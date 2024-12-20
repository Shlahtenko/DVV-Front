import { Button, Card, Col, Flex, List, Row } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router';

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

  const votedSubjects = [
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
      <Flex className={styles.content} gap="large" vertical>
        <Card>
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
        </Card>

        {!voted ? (
          <Card>
            <Flex
              className={styles.vote}
              align="center"
              justify="space-between"
              gap="middle"
            >
              <Text text="Вам потрібно обрати дисципліни вільного вибору"></Text>
              <Button type="primary">
                <Link to="/vote">Обрати</Link>
              </Button>
            </Flex>
          </Card>
        ) : (
          <Card>
            <Flex className={styles.cards} gap="large" align="center" vertical>
              <Heading text="Обрані дисципліни вільного вибору:" />
              <Row gutter={[16, 16]} justify="center">
                {votedSubjects.map((item) => (
                  <Col key={item.id} xs={24} sm={12}>
                    <Card style={{ textAlign: 'center' }}>{item.title}</Card>
                  </Col>
                ))}
              </Row>
            </Flex>
          </Card>
        )}

        <Button type="primary" danger>
          Вийти з акаунту
        </Button>
      </Flex>
    </Flex>
  );
};

export default Profile;
