// EditUserModal.tsx
import {
  Modal,
  TextInput,
  Button,
  Group,
  Radio,
  Stack,
  Text,
  Box,
  PasswordInput,
} from "@mantine/core";

import { useForm } from "@mantine/form";
import {
  AllUsersResponse,
  EditUserRequest,
} from "../../../../../features/admin/model/types";
import { useEffect } from "react";
import { useEditUser } from "../../../../../features/admin/lib/hooks/useEditUser";

interface EditUserModalProps {
  data: EditUserRequest | null;
  opened: boolean;
  onClose: () => void;
  check: boolean;
  setCheck: (check: boolean) => void;
}

export function EditUserModal({
  data,
  opened,
  onClose,
  check,
  setCheck,
}: EditUserModalProps) {
  const { editUser } = useEditUser();
  const form = useForm({
    initialValues: {
      id: data?.id,
      name: data?.name,
      email: data?.email,
      role: data?.role,
      password: "",
    },
  });

  useEffect(() => {
    form.setValues({
      id: data?.id,
      name: data?.name,
      email: data?.email,
      role: data?.role,
      password: "",
    });
  }, [opened, data]);

  const handleSubmit = () => {
    const userData: EditUserRequest = {
      userId: form.values.id,
      name: form.values.name,
      email: form.values.email,
      role: form.values.role,
    };

    if (form.values.password.trim() !== "") {
      userData.password = form.values.password;
    }

    editUser(userData);
    setCheck(!check);
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Редактировать пользователя"
      size="lg"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="ФИО"
            placeholder="Введите ФИО"
            {...form.getInputProps("name")}
          />

          <TextInput
            label="Email"
            placeholder="Введите email"
            {...form.getInputProps("email")}
          />

          <Box>
            <Text mb="xs">Роль</Text>
            <Group>
              <Radio
                label="Пользователь"
                value="user"
                color="var(--main-color)"
                checked={form.values.role === "User"}
                onChange={() => form.setFieldValue("role", "User")}
              />
              <Radio
                label="Аналитик"
                value="analyst"
                color="var(--main-color)"
                checked={form.values.role === "Analyst"}
                onChange={() => form.setFieldValue("role", "Analyst")}
              />
              <Radio
                label="Администратор"
                value="admin"
                color="var(--main-color)"
                checked={form.values.role === "Admin"}
                onChange={() => form.setFieldValue("role", "Admin")}
              />
            </Group>
          </Box>

          <PasswordInput
            label="Сменить пароль"
            placeholder="Новый пароль"
            type="password"
            {...form.getInputProps("password")}
          />

          <Group mt="xl">
            <Button color="#FF0000" onClick={() => console.log("Удалить")}>
              Удалить
            </Button>
            <Button type="submit" variant="filled" color="var(--main-color)">
              Сохранить
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
