import { Button, Card, Col, Flex, Input, List, Row, Select } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router';

import Heading from '@/ui/components/heading';
import Text from '@/ui/components/text';

import styles from './profile.module.scss';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [list, setList] = useState([
    { title: 'Електронна пошта:', value: '' },
    { title: 'Факультет:', value: '' },
    { title: 'Спеціальність:', value: '' },
    { title: 'Ступінь:', value: '' },
    { title: 'Курс:', value: '' },
    { title: 'Форма навчання:', value: '' },
  ]);

  const [tempList, setTempList] = useState([...list]);

  const handleSave = () => {
    setList(tempList);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempList([...list]);
    setIsEditing(false);
  };

  const handleTempChange = (index, newValue) => {
    const updatedTempList = [...tempList];
    updatedTempList[index].value = newValue;
    setTempList(updatedTempList);
  };

  const options = {
    faculty: [
      { label: 'Факультет 1', value: 'faculty1' },
      { label: 'Факультет 2', value: 'faculty2' },
      { label: 'Факультет 3', value: 'faculty3' },
    ],
    specialty: [
      { label: 'Спеціальність 1', value: 'specialty1' },
      { label: 'Спеціальність 2', value: 'specialty2' },
      { label: 'Спеціальність 3', value: 'specialty3' },
    ],
    degree: [
      { label: 'Бакалавр', value: 'degree1' },
      { label: 'Магістр', value: 'degree2' },
      { label: 'Аспірант', value: 'degree3' },
    ],
    course: [
      { label: '1', value: 'course1' },
      { label: '2', value: 'course2' },
      { label: '3', value: 'course3' },
      { label: '4', value: 'course3' },
    ],
    form: [
      { label: 'За кошти державного бюджету', value: 'form1' },
      { label: 'За кошти фізичної особи', value: 'form2' },
    ],
  };

  const getOptions = (index) => {
    switch (index) {
      case 1:
        return options.faculty;
      case 2:
        return options.specialty;
      case 3:
        return options.degree;
      case 4:
        return options.course;
      case 5:
        return options.form;
      default:
        return [];
    }
  };

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
            dataSource={list}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <Flex className={styles.listItem} flex={1}>
                  <Flex>{item.title}</Flex>
                  <Flex className={styles.data}>
                    {isEditing ? (
                      index === 0 ? (
                        <Input
                          value={item.value}
                          onChange={(e) =>
                            handleTempChange(index, e.target.value)
                          }
                        />
                      ) : (
                        <Select
                          className={styles.dropdown}
                          value={item.value}
                          onChange={(value) => handleTempChange(index, value)}
                          options={getOptions(index)}
                        />
                      )
                    ) : index === 0 ? (
                      item.value || '—'
                    ) : (
                      getOptions(index).find(
                        (option) => option.value === item.value,
                      )?.label || '—'
                    )}
                  </Flex>
                </Flex>
              </List.Item>
            )}
          >
            {!isEditing ? (
              <Flex align="center" justify="flex-end">
                <Button onClick={() => setIsEditing((prev) => !prev)}>
                  Редагувати
                </Button>
              </Flex>
            ) : (
              <Flex align="center" justify="flex-end" gap="small">
                <Button onClick={handleSave}>Зберегти</Button>
                <Button onClick={handleCancel}>Скасувати</Button>
              </Flex>
            )}
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
