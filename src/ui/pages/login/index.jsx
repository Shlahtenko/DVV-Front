import { Button, Card, Flex, Form, Image, Input } from 'antd';
import { Link, useNavigate } from 'react-router';

import { loginUser } from '@/core/api/auth';
import { saveToken } from '@/ui/boot/router/auth';
import useMutate from '@/ui/hooks/useMutate';
import { PROFILE, REGISTER } from '@boot/router/routes.js';
import Heading from '@components/heading';
import Text from '@components/text';

import styles from './login.module.scss';

const Login = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutate({
    fetcher: loginUser,
    onSuccess: (responseData) => {
      if (responseData?.data) {
        saveToken(responseData.data);
        navigate(PROFILE, { replace: true });
      }
    },
    onError: (error) => {
      console.error(error?.response?.data?.error);
      // console.error(error);
    },
  });

  const handleSubmit = (values) => {
    mutate(values);
  };

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
      <Card className={styles.form}>
        <Form className={styles.form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Email"
            name="email"
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
      </Card>
    </Flex>
  );
};

export default Login;
