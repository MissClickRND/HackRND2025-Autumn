import { Box, Button, Stack, Text } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import apiClient from "../../app/api/axiosInstance";
import { notifications } from "@mantine/notifications";

const API = import.meta.env.VITE_API;

export default function Main() {
  const test = () => {
    {
      apiClient
        .get(`${API}/test`)
        .then(() => {
          notifications.show({
            title: "Успешно",
            message: "Тест",
            position: "bottom-right",
            color: "green",
            autoClose: 3000,
          });
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
    }
  };

  return (
    <Box w="100vw" bg="var(--main-color)">
      <Stack>
        <Button onClick={test} m={15}>
          Тестовая кнопка
        </Button>
        <Text py={50} ta="center" fz={28} c="white">
          <IconHome />
          Главная страница сайта
        </Text>
      </Stack>
    </Box>
  );
}
