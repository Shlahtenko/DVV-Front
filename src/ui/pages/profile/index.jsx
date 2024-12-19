import { Button, Card, Col, Flex, List, Row } from 'antd';

import Heading from '@/ui/components/heading';
import Text from '@/ui/components/text';

import styles from './profile.module.scss';

const Profile = () => {
  const list = [
    { title: 'Електронна пошта:', value: '' },
    { title: 'Факультет:', value: '' },
    { title: 'Спеціальність:', value: '' },
    { title: 'Ступінь:', value: '' },
    { title: 'Курс:', value: '' },
    { title: 'Форма навчання:', value: '' },
  ];

  const votedsubjects = [
    { title: 'Електронна пошта:' },
    { title: 'Факультет:' },
    { title: 'Спеціальність:' },
    { title: 'Ступінь:' },
    { title: 'Курс:' },
    { title: 'Форма навчання:' },
  ];

  return (
    <Flex className={styles.profile} align="center" gap="large" vertical>
      <Heading text="Шляхтенко Іван" />
      <List
        className={styles.list}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            {/* <List.Item.Meta title={item.title} description={item.value} />
        <div>content</div> */}
            <Flex>{item.title}</Flex>
            <Flex>{item.value}</Flex>
          </List.Item>
        )}
      >
        <Flex align="center" justify="flex-end">
          <Button>Редагувати</Button>
          <Button>Зберегти</Button>
        </Flex>
      </List>
      <Flex className={styles.vote} align="center" justify="space-between">
        <Text text="Вам потрібно обрати дисципліни вільного вибору"></Text>
        <Button type="primary">Обрати</Button>
      </Flex>
      <Flex>
        <Row className={styles.cards} gutter={[16, 16]} justify="center">
          {votedsubjects.map((item) => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
              <Card>{item.title}</Card>
            </Col>
          ))}
        </Row>
      </Flex>
      <Button type="primary" danger>
        Вийти з акаунту
      </Button>
    </Flex>
  );
};

export default Profile;
