import { Center, Flex } from "@mantine/core";
import apiClient from "../../../app/api/axiosInstance";
import { notifications } from "@mantine/notifications";
import NavButton from "../../../widgets/navButton/ui/NavButton";
import { IconChartDots, IconClipboardText, IconFileAnalytics, IconLayoutDashboard } from "@tabler/icons-react";
import { motion } from "motion/react";
import { navbarVar } from "./animations";
import Logo from "./Logo";

const API = import.meta.env.VITE_API;
export default function NavLayout() {
  const links = [
    { name: "Аналитика", link: "/", icon: <IconLayoutDashboard color="black"/> },
    { name: "Админ панель", link: "/admin", icon: <IconClipboardText color="black"/> },
    { name: "Отчеты", link: "/reports", icon: <IconChartDots color="black"/> },
    { name: "Проекты", link: "/projects", icon: <IconFileAnalytics color="black"/>}
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
    <Flex component={motion.div} variants={navbarVar} initial="hide" animate="show" whileHover={"hover"} pt={20} gap={10} direction={'column'} p={10}>
      <Center mb={10}>
      <Logo width={20} height={32}/>
      </Center>
      {links.map((el, index) => (
        <NavButton key={index + "-navButton"} to={el.link} title={el.name} icon={el.icon} />
      ))}
    </Flex>
  );
}
