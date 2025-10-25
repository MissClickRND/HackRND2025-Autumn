import { Outlet } from "react-router-dom";
import NavLayout from "./components/NavLayout";
import { Flex } from "@mantine/core";

export default function MainLayout() {
  return (
    <Flex style={{minHeight: "100vh"}}>
      <NavLayout />
      <Outlet />
    </Flex>
  );
}
