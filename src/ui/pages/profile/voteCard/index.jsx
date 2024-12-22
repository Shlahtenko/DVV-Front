import { Button, Card, Col, Flex, Row } from 'antd';
import { Link } from 'react-router';

import Heading from '@/ui/components/heading';
import Text from '@/ui/components/text';

import styles from '../profile.module.scss';

const VoteCard = ({ tempData }) => {
  return (
    <>
      {tempData?.course ? (
        !tempData?.votedSubjects.length > 0 ? (
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
            <Flex align="flex-end" gap="middle" vertical>
              <Flex
                className={styles.cards}
                gap="large"
                align="center"
                vertical
              >
                <Heading text="Обрані дисципліни вільного вибору" />
                <Row gutter={[16, 16]} justify="center">
                  {tempData.votedSubjects.map((item) => (
                    <Col key={item.id} xs={24} sm={12}>
                      <Card style={{ textAlign: 'center' }}>{item}</Card>
                    </Col>
                  ))}
                </Row>
              </Flex>
              <Flex
                className={styles.vote}
                align="center"
                justify="flex-end"
                gap="middle"
              >
                <Button type="primary">
                  <Link to="/vote">Змінити</Link>
                </Button>
              </Flex>
            </Flex>
          </Card>
        )
      ) : (
        <Card>
          <Flex
            className={styles.vote}
            align="center"
            justify="space-between"
            gap="middle"
          >
            <Text text="Для обрання дисциплін, будь ласка, вкажіть Ваш курс"></Text>
          </Flex>
        </Card>
      )}
    </>
  );
};

export default VoteCard;