import { Button, Card, Col, Flex, Input, List, Row, Select } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import { getUserById } from '@/core/api/user';
import { clearToken, getUserIdFromToken } from '@/ui/boot/router/auth';
import { LOGIN } from '@/ui/boot/router/routes';
import Heading from '@/ui/components/heading';
import Text from '@/ui/components/text';
import useFetch from '@/ui/hooks/useFetch';

import styles from './profile.module.scss';
import ProfileCard from './profileCard';

const Profile = () => {
  const userId = getUserIdFromToken();
  const { data, error, isFetching } = useFetch({
    fetcher: getUserById,
    keys: ['users', userId],
    params: { id: userId },
  });

  const [tempData, setTempData] = useState(null);
  useEffect(() => {
    if (data) {
      setTempData({ ...data });
    }
  }, [data]);

  console.log(tempData);

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
      <Heading text={data?.fullname} />
      <Flex className={styles.content} gap="large" vertical>
        <ProfileCard
          data={data}
          tempData={tempData}
          setTempData={setTempData}
        />

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

        <Button onClick={clearToken} type="primary" danger>
          <Link to={LOGIN}>Вийти з акаунту</Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Profile;
