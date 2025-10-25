import { Outlet } from "react-router-dom";
import NavLayout from "./components/NavLayout";
import { Box, Flex } from "@mantine/core";

export default function MainLayout() {
  return (
    <Flex style={{ minHeight: "100vh" }}>
      <NavLayout />
      <Box pl={70}></Box>
      <Outlet />
    </Flex>
  );
}
