import { Button, Col, Collapse, Flex, Row, Select } from 'antd';
import { useState } from 'react';

import Heading from '@/ui/components/heading';
import Text from '@/ui/components/text';
import { courseVocabulary } from '@/ui/constants/course';

import styles from './vote.module.scss';

const Vote = () => {
  const mockDataCourse = 3; // логіка фетчингу курсу з профілю юзера
  const requiredSubjects = courseVocabulary[mockDataCourse];

  const options = [
    {
      title: 'Travel English',
      description: 'Some weird fucking subject',
      faculty: 'kanava',
      teacher: 'lil bitch',
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      title: 'Kobets Co',
      description: 'He will never give you up',
      faculty: 'infinite money',
      teacher: 'gigachad',
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXc',
    },
  ];

  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleChange = (value) => {
    setSelectedSubjects(value);
    console.log(value);
  };

  return (
    <Flex className={styles.vote} align="center" gap="large" vertical>
      <Heading
        text={`Вам потрібно обрати ${requiredSubjects} предмети з переліку`}
      />
      <Flex className={styles.content} gap="large" vertical>
        <Heading text={`Огляд дисциплін`} />
        <Collapse accordion>
          {options.map((option) => (
            <Collapse.Panel header={option.title} key={option.link}>
              <Flex vertical>
                <Text bpref="Викладач:" text={option.teacher} />
                <Text bpref="Факультет:" text={option.faculty} />
                <Text bpref="Опис дисципліни:" text={option.description} />
                <Flex justify="flex-end">
                  <Button href={option.link}>
                    Переглянути презентацію курсу
                  </Button>
                </Flex>
              </Flex>
            </Collapse.Panel>
          ))}
        </Collapse>

        <Heading text={`Вибір дисциплін`} />
        <Select
          mode="multiple"
          placeholder="Оберіть дисципліни"
          onChange={handleChange}
          options={options}
          maxCount={requiredSubjects}
        ></Select>

        {selectedSubjects.length > 0 && (
          <Flex className={styles.cards} gap="large" vertical>
            <Heading text="Обрані дисципліни:" />
            <Row gutter={[16, 16]} justify="center">
              {selectedSubjects.map((item) => (
                <Col key={item.id} xs={24} sm={12}>
                  <Card style={{ textAlign: 'center' }}>{item.title}</Card>
                </Col>
              ))}
            </Row>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Vote;
