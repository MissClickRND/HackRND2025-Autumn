import { Center, Flex, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";

export default function Error403() {
  return (
    <Center h="100vh">
      <Flex direction="column">
        <Text
          style={{ fontSize: "80px", lineHeight: "80px" }}
          fw={900}
          variant="gradient"
          gradient={{
            from: "var(--main-color-light-blue)",
            to: "var(--main-color)",
            deg: 77,
          }}
        >
          Ожидание подтверждения
        </Text>
        <Text fz={24} c="var(--subtitle)">
          Ожидайте подтверждение администратора, или выберите другой аккаунт.
        </Text>
        <Flex gap={2} justify="center" align="center" mt={30}>
          <NavLink to="/auth/login">
            <Text c="var(--main-color)" fz={24} fw={600}>
              К авторизации
            </Text>
          </NavLink>
        </Flex>
      </Flex>
    </Center>
  );
}
