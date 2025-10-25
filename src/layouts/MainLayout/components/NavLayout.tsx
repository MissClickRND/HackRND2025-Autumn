import { ActionIcon, Button, Center, Flex } from "@mantine/core";
// import apiClient from "../../../app/api/axiosInstance";
// import { notifications } from "@mantine/notifications";
import NavButton from "../../../widgets/navButton/ui/NavButton";
import {
  IconChartDots,
  IconClipboardText,
  IconFileAnalytics,
  IconLayoutDashboard,
  IconLogout,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { navbarVar } from "./animations";
import Logo from "./Logo";
import apiClient from "../../../app/api/axiosInstance";
import { notifications } from "@mantine/notifications";
import { baseUrl } from "../../../shared/api";

// const API = import.meta.env.VITE_API;
export default function NavLayout() {
  const links = [
    {
      name: "Аналитика",
      link: "/",
      icon: <IconLayoutDashboard />,
    },
    { name: "Отчеты", link: "/reports", icon: <IconChartDots /> },
    {
      name: "Проекты",
      link: "/projects",
      icon: <IconFileAnalytics />,
    },
    {
      name: "Админ панель",
      link: "/admin",
      icon: <IconClipboardText />,
    },
  ];

  const logout = () => {
    {
      apiClient
        .post(`${baseUrl}/logout`)
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
    <Flex
      direction={"column"}
      style={{ borderRight: "1px solid #D9D9D9" }}
      justify="space-between"
      align="center"
      h="100vh"
      pos="fixed"
    >
      <Flex
        component={motion.div}
        variants={navbarVar}
        initial="hide"
        animate="show"
        whileHover={"hover"}
        pt={20}
        gap={10}
        direction={"column"}
        p={10}
        visibleFrom="sm"
      >
        <Center mb={10}>
          <Logo width={20} height={32} />
        </Center>
        {links.map((el, index) => (
          <NavButton
            key={index + "-navButton"}
            to={el.link}
            title={el.name}
            icon={el.icon}
          />
        ))}
      </Flex>

      <ActionIcon
        w={48}
        h={48}
        mb={20}
        color="var(--main-color-orange)"
        onClick={logout}
      >
        <IconLogout />
      </ActionIcon>
    </Flex>
  );
}
