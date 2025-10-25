import { Button, Flex } from "@mantine/core";
import { NavLink } from "react-router-dom";
import apiClient from "../../../app/api/axiosInstance";
import { notifications } from "@mantine/notifications";

const API = import.meta.env.VITE_API;
export default function NavLayout() {
  const links = [
    { name: "Главная", link: "/" },
    { name: "Админ", link: "/admin" },
    { name: "О нас", link: "/about" },
    { name: "Авторизация", link: "/auth/login" },
    { name: "Регистрация", link: "/auth/register" },
  ];

  const logout = () => {
    {
      apiClient
        .post(`${API}/logout`)
        .then(() => {
          notifications.show({
            title: "Успешно",
            message: "Вы вышли из аккаунта",
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
      window.location.href = "/auth/login";
    }
  };

  return (
    <Flex gap={40} p={20}>
      {links.map((el, index) => (
        <NavLink to={el.link} key={index}>
          {({ isActive }) => (
            <Button bg={isActive ? "red" : "blue"}>{el.name}</Button>
          )}
        </NavLink>
      ))}
      <Button onClick={logout} color="orange">
        Выйти
      </Button>
    </Flex>
  );
}
