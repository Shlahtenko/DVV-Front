import { Button, Card, Flex, Form, Image, Input } from 'antd';
import { Link, useNavigate } from 'react-router';

import { createUser, loginUser } from '@/core/api/auth';
import { saveToken } from '@/ui/boot/router/auth';
import useMutate from '@/ui/hooks/useMutate';
import { LOGIN, PROFILE } from '@boot/router/routes.js';
import Heading from '@components/heading';
import Text from '@components/text';

import styles from './register.module.scss';

const Register = () => {
  const navigate = useNavigate();

  const { mutate: loginMutate } = useMutate({
    fetcher: loginUser,
    onSuccess: (responseData) => {
      if (responseData?.data) {
        saveToken(responseData.data);
        navigate(PROFILE, { replace: true });
      }
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const { mutate } = useMutate({
    fetcher: createUser,
    onSuccess: (_, variables) => {
      const { email, password } = variables;
      loginMutate({ email, password });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = (values) => {
    const fullname = `${values.name} ${values.surname}`;
    const { name, surname, ...data } = values;
    const finalData = { fullname, ...data };
    mutate(finalData);
  };

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
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Ім'я"
            name="name"
            rules={[
              { required: true, message: "Будь-ласка введіть ваше ім'я!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Прізвище"
            name="surname"
            rules={[
              { required: true, message: 'Будь-ласка введіть ваше прізвище!' },
            ]}
          >
            <Input />
          </Form.Item>
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
