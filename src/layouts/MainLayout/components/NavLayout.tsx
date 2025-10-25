import { Center, Flex } from "@mantine/core";
// import apiClient from "../../../app/api/axiosInstance";
// import { notifications } from "@mantine/notifications";
import NavButton from "../../../widgets/navButton/ui/NavButton";
import {
  IconChartDots,
  IconClipboardText,
  IconFileAnalytics,
  IconLayoutDashboard,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { navbarVar } from "./animations";
import Logo from "./Logo";
import LogoutButton from "../../../features/auth/ui/LogoutButton";
import Avatar from "../../../entities/me/ui/Avatar";

// const API = import.meta.env.VITE_API;
export default function NavLayout() {
  const links = [
    {
      name: "Дашборд",
      link: "/",
      icon: <IconLayoutDashboard />,
    },
    {
      name: "Проекты",
      link: "/projects",
      icon: <IconFileAnalytics />,
    },
    { name: "Отчеты", link: "/reports", icon: <IconChartDots /> },
    {
      name: "Админ панель",
      link: "/admin",
      icon: <IconClipboardText />,
    },
  ];

  return (
    <Flex
        component={motion.div}
        variants={navbarVar}
        initial="hide"
        animate="show"
        whileHover={"hover"}
     direction={"column"} justify={"space-between"} p={10}>
      <Flex
        pt={20}
        gap={10}
        direction={"column"}
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
        <Flex direction={"column"} gap={20}>
          <Avatar />
          <LogoutButton />
        </Flex>
    </Flex>
  );
}
