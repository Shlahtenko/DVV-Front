import { Button, Card, Collapse, Flex } from 'antd';

import { getUserById } from '@/core/api/user';
import { getUserIdFromToken } from '@/ui/boot/router/auth';
import Heading from '@/ui/components/heading';
import Text from '@/ui/components/text';
import { courseVocabulary, subjectOptions } from '@/ui/constants';
import useFetch from '@/ui/hooks/useFetch';

import styles from './vote.module.scss';
import VoteCard from './voteCard';

const Vote = () => {
  const userId = getUserIdFromToken();

  const { data } = useFetch({
    fetcher: getUserById,
    keys: ['users', userId],
    params: { id: userId },
  });

  const options = subjectOptions.filter(
    (subject) => subject.course == data?.course,
  );

  const requiredSubjects = courseVocabulary[data?.course];

  return (
    <Flex className={styles.vote} align="center" gap="large" vertical>
      <Heading
        text={`Вам потрібно обрати ${requiredSubjects} дисципліни з переліку`}
      />
      <Flex className={styles.content} gap="large" vertical>
        <Card className={styles.overview}>
          <Flex gap="large" vertical>
            <Heading text={`Огляд дисциплін`} />
            <Collapse accordion>
              {options.map((option) => (
                <Collapse.Panel header={option.title} key={option.title}>
                  <Flex gap="large" vertical>
                    <Flex vertical>
                      <Text bpref="Викладач:" text={option.teacher} />
                      <Text bpref="Факультет:" text={option.faculty} />
                      <Text
                        bpref="Опис дисципліни:"
                        text={option.description}
                      />
                    </Flex>

                    {option.link && (
                      <Button href={option.link}>Презентація</Button>
                    )}
                  </Flex>
                </Collapse.Panel>
              ))}
            </Collapse>
          </Flex>
        </Card>

        <VoteCard
          data={data}
          userId={userId}
          requiredSubjects={requiredSubjects}
        />
      </Flex>
    </Flex>
  );
};

export default Vote;
