import { Button, Flex, Form, Image, Input } from 'antd';
import { Link } from 'react-router';

import { REGISTER } from '@boot/router/routes.js';
import Heading from '@components/heading';
import Text from '@components/text';

import styles from './login.module.scss';

const Login = () => {
  return (
    <Flex
      className={styles.login}
      justify="center"
      align="center"
      gap="large"
      vertical
    >
      <Image src="./ksu_logo.png" width={64} height={64} />
      <Flex justify="center" align="center" gap="middle" vertical>
        <Heading text="З поверненням!" />
        <Text text="Щоб увійти, будь ласка, введіть свої дані." />
      </Flex>
      <Form className={styles.form} layout="vertical">
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
          <Button className={styles.button} type="primary" htmlType="submit">
            Увійти
          </Button>
        </Form.Item>
        <p>
          Немає акаунту? <Link to={REGISTER}>Зареєструватись</Link>
        </p>
      </Form>
    </Flex>
  );
};

export default Login;
