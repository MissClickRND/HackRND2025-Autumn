import { Button, Flex, Input, PasswordInput, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { NavLink } from "react-router-dom";

export default function Login() {
  const form = useForm({
    initialValues: {
      login: "",
      password: "",
    },
    validate: {
      login: (value) => (value.length >= 3 ? null : "Логин слишком короткий"),
      password: (value) =>
        value.length >= 5 ? null : "Пароль слишком короткий",
    },
  });

  const handleSubmit = () => {
    console.log(form.values);
  };

  return (
    <Stack>
      <Text ta="center" fz={32} fw={500}>
        Авторизация
      </Text>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Input.Wrapper label="Логин" error={form.errors.login}>
            <Input
              w={400}
              size="md"
              placeholder="Введите ваш логин"
              {...form.getInputProps("login")}
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
