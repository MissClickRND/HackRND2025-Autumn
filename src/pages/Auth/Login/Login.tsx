import { Button, Flex, Input, PasswordInput, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { notifications } from "@mantine/notifications";

const API = import.meta.env.VITE_API;
export default function email() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (value.length >= 3 ? null : "Логин слишком короткий"),
      password: (value) =>
        value.length >= 5 ? null : "Пароль слишком короткий",
    },
  });

  const handleSubmit = () => {
    axios
      .post(
        `${API}/login`,
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
        Авторизация
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
          <Button type="submit" fullWidth size="md">
            Войти
          </Button>
          <Flex gap={2} justify="center" align="center">
            <Text>Нет аккаунта? </Text>
            <NavLink to="/auth/register">
              <Text c="var(--main-color)" fw={600}>
                Зарегистрироваться
              </Text>
            </NavLink>
          </Flex>
        </Stack>
      </form>
    </Stack>
  );
}
