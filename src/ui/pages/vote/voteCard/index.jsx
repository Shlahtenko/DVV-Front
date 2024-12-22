import { Button, Card, Flex, Select } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { updateVotes } from '@/core/api/vote';
import { PROFILE } from '@/ui/boot/router/routes';
import Heading from '@/ui/components/heading';
import { subjectOptions as options } from '@/ui/constants';
import useMutate from '@/ui/hooks/useMutate';

import styles from '../vote.module.scss';

const VoteCard = ({ userId, requiredSubjects }) => {
  const [votedSubjects, setVotedSubjects] = useState([]);

  const navigate = useNavigate();

  const { mutate } = useMutate({
    fetcher: updateVotes,
    onSuccess: () => {
      navigate(PROFILE, { replace: true });
    },
    onError: (error) => {
      console.error('Failed to patch user:', error);
    },
  });

  const handleChange = (value) => {
    setVotedSubjects(value);
  };
  const handleSave = () => {
    mutate({ id: userId, votedSubjects });
  };

  return (
    <Card className={styles.selection}>
      <Flex gap="large" vertical>
        <Heading text={`Вибір дисциплін`} />
        <Select
          mode="multiple"
          placeholder="Оберіть дисципліни"
          onChange={handleChange}
          options={options.map((option) => ({
            label: option.title,
            value: option.title,
          }))}
          maxCount={requiredSubjects}
        ></Select>
        <Flex>
          <Button onClick={handleSave} type="primary">
            Зберегти
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default VoteCard;
