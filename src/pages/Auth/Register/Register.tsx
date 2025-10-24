import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  PasswordInput,
  Stack,
  Text,
  Image,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { notifications } from "@mantine/notifications";

const API = import.meta.env.VITE_API;
export default function Register() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validate: {
      name: (value: string) =>
        value.length >= 3 ? null : "Имя слишком короткое",
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
          name: form.values.name,
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
      <Center>
        <Image src="/icons/MainLogo.svg" mb={30} w={300} />
      </Center>

      <Box>
        <Text fz={24} fw={700}>
          Регистрация
        </Text>
        <Text fz={13} c="var(--subtitle)">
          Зарегистрируйтесь, чтобы продолжить
        </Text>
      </Box>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Input.Wrapper label="ФИО" error={form.errors.name}>
            <Input
              w={400}
              size="md"
              placeholder="Введите ваше ФИО"
              {...form.getInputProps("name")}
            />
          </Input.Wrapper>
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
          <Button type="submit" fullWidth size="md" color="var(--main-color)">
            Зарегистрироваться
          </Button>
          <Flex gap={2} justify="center" align="center">
            <Text>Уже есть аккаунт?</Text>
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
