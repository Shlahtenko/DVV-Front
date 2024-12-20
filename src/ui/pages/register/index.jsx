import { Button, Card, Flex, Form, Image, Input } from 'antd';
import { Link } from 'react-router';

import { LOGIN } from '@boot/router/routes.js';
import Heading from '@components/heading';
import Text from '@components/text';

import styles from './register.module.scss';

const Register = () => {
  return (
    <Flex
      className={styles.register}
      justify="center"
      align="center"
      gap="large"
      vertical
    >
      <Image src="./ksu_logo.png" width={64} height={64} />
      <Flex justify="center" align="center" gap="middle" vertical>
        <Heading text="Вітаємо!" />
        <Text text="Щоб зареєструватись, будь ласка, введіть свої дані." />
      </Flex>
      <Card className={styles.card}>
        <Form layout="vertical">
          <Form.Item
            label="Email"
            name="username"
            rules={[
              { required: true, message: 'Будь ласка введіть вашу пошту!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              { required: true, message: 'Будь ласка введіть ваш пароль!' },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label={null}>
            <Button className={styles.button} type="primary">
              Зареєструватись
            </Button>
          </Form.Item>
          <p className={styles.existing}>
            Вже є акаунт? <Link to={LOGIN}>Увійти</Link>
          </p>
        </Form>
      </Card>
    </Flex>
  );
};

export default Register;
