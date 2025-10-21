import { Button, Flex, Input, PasswordInput, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { notifications } from "@mantine/notifications";

const API = import.meta.env.VITE_API;
export default function Register() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validate: {
      email: (value: string) =>
        value.length >= 3 ? null : "Почта слишком короткая",
      password: (value: string) =>
        value.length >= 5 ? null : "Пароль слишком короткий",
      repeatPassword: (value: string, values) =>
        value === values.password ? null : "Пароли не совпадают",
    },
  });

  const handleSubmit = () => {
    axios
      .post(
        `${API}/register`,
        {
          email: form.values.email,
          password: form.values.password,
        },
        {
          withCredentials: true,
          headers: {
            "x-client-type": "Web",
          },
        }
      )
      .then((res) => {
        notifications.show({
          title: "Успешно",
          message: res.data.message,
          position: "bottom-right",
          color: "green",
          autoClose: 3000,
        });
        window.location.href = "/";
      })
      .catch((err) =>
        notifications.show({
          title: "Ошибка",
          message: err.response.data.message,
          position: "bottom-right",
          color: "red",
          autoClose: 3000,
        })
      );
  };

  return (
    <Stack>
      <Text ta="center" fz={32} fw={500}>
        Регистрация
      </Text>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Input.Wrapper label="Email" error={form.errors.email}>
            <Input
              w={400}
              size="md"
              placeholder="Введите вашу почту"
              {...form.getInputProps("email")}
            />
          </Input.Wrapper>
          <Input.Wrapper label="Пароль">
            <PasswordInput
              w={400}
              size="md"
              placeholder="Введите ваш пароль"
              {...form.getInputProps("password")}
            />
          </Input.Wrapper>
          <Input.Wrapper label="Повторите пароль">
            <PasswordInput
              size="md"
              w={400}
              placeholder="Повторите ваш пароль"
              {...form.getInputProps("repeatPassword")}
            />
          </Input.Wrapper>
          <Button type="submit" fullWidth size="md">
            Зарегистрироваться
          </Button>
          <Flex gap={2} justify="center" align="center">
            <Text>Есть аккаунт? </Text>
            <NavLink to="/auth/login">
              <Text c="var(--main-color)" fw={600}>
                Войти
              </Text>
            </NavLink>
          </Flex>
        </Stack>
      </form>
    </Stack>
  );
}
