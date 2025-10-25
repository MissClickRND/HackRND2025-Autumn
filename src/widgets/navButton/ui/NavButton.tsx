import { ActionIcon, Center, Flex, Typography } from "@mantine/core";
import React, { FC, ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { navButtonTitleVar } from "../../../layouts/MainLayout/components/animations";

interface IProps {
  to: string;
  title: string;
  icon: ReactElement<{ color: string }>;
}

const NavButton: FC<IProps> = ({ to, title, icon }) => {
  const location = useLocation();

  return (
    <Flex align={"center"}>
      <NavLink style={{ color: "black" }} to={to}>
        <ActionIcon
          style={{ pointerEvents: to === location.pathname ? "none" : "unset" }}
          color={
            to === location.pathname
              ? "var(--main-color)"
              : "var(--navbar-button-color)"
          }
          c={to === location.pathname ? "white" : "black"}
          size={50}
        >
          {React.isValidElement(icon) &&
            React.cloneElement(icon, {
              color: to === location.pathname ? "white" : "black",
            })}
        </ActionIcon>
      </NavLink>
      <Center
        variants={navButtonTitleVar}
        component={motion.div}
        style={{
          position: "absolute",
          left: 80,
          borderRadius: ".5rem",
          pointerEvents: "none",
          zIndex: 1000,
        }}
        py={7}
        px={14}
        bg="var(--navbar-button-color)"
      >
        <Typography style={{ textWrap: "nowrap" }}>{title}</Typography>
      </Center>
    </Flex>
  );
};

export default NavButton;
