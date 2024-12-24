import { Button, Flex } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import { getUserById } from '@/core/api/user';
import { clearToken, getUserIdFromToken } from '@/ui/boot/router/auth';
import { LOGIN } from '@/ui/boot/router/routes';
import Heading from '@/ui/components/heading';
import useFetch from '@/ui/hooks/useFetch';

import styles from './profile.module.scss';
import ProfileCard from './profileCard';
import VoteCard from './voteCard';

const Profile = () => {
  const userId = getUserIdFromToken();

  const { data, isFetching } = useFetch({
    fetcher: getUserById,
    keys: ['users', userId],
    params: { id: userId },
  });

  const [tempData, setTempData] = useState(null);

  useEffect(() => {
    if (!isFetching) {
      setTempData({ ...data });
    }
  }, [data]);

  return (
    <Flex className={styles.profile} align="center" gap="large" vertical>
      <Heading text={data?.fullname} />
      <Flex className={styles.content} gap="large" vertical>
        <ProfileCard
          data={data}
          tempData={tempData}
          setTempData={setTempData}
        />
        <VoteCard tempData={tempData} />
        <Button onClick={clearToken} type="primary" danger>
          <Link to={LOGIN}>Вийти з акаунту</Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Profile;
