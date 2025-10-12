import { Center, Paper } from "@mantine/core";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <Center w="100vw" h="100vh" bg="var(--auth-bg)">
      <Paper bg="white" p={15}>
        <Outlet />
      </Paper>
    </Center>
  );
}
