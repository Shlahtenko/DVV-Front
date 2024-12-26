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

  const { data, refetch } = useFetch({
    fetcher: getUserById,
    keys: ['users', userId],
    params: { id: userId },
  });

  const [editableData, setEditableData] = useState(null);

  useEffect(() => {
    if (data) {
      setEditableData({ ...data });
    }
  }, [data]);

  return (
    <Flex className={styles.profile} align="center" gap="large" vertical>
      <Heading text={data?.fullname} />
      <Flex className={styles.content} gap="large" vertical>
        <ProfileCard
          data={data}
          editableData={editableData}
          setEditableData={setEditableData}
          refetch={refetch}
        />
        <VoteCard data={data} />
        <Button onClick={clearToken} type="primary" danger>
          <Link to={LOGIN}>Вийти з акаунту</Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Profile;
