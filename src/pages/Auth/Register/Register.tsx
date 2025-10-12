import { Button, Flex, Input, PasswordInput, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { NavLink } from "react-router-dom";

export default function Register() {
  const form = useForm({
    initialValues: {
      login: "",
      password: "",
      repeatPassword: "",
    },
    validate: {
      login: (value: string) =>
        value.length >= 3 ? null : "Логин слишком короткий",
      password: (value: string) =>
        value.length >= 5 ? null : "Пароль слишком короткий",
      repeatPassword: (value: string, values) =>
        value === values.password ? null : "Пароли не совпадают",
    },
  });

  const handleSubmit = () => {
    console.log(form.values);
  };

  return (
    <Stack>
      <Text ta="center" fz={32} fw={500}>
        Регистрация
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
