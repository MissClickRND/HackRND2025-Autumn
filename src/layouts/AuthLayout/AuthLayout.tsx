import { Center, Flex, Paper, Image } from "@mantine/core";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <Center w="100vw" h="100vh" bg="var(--white-gray)">
      <Paper bg="white" bdrs={16} p={19}>
        <Flex>
          <Image
            w={500}
            bdrs={8}
            src="https://avatars.mds.yandex.net/i?id=d34ce857364b64bf1a7ad903c87768127ef6ba6c-4432759-images-thumbs&n=13"
          />
          <Flex direction="column" justify="center" px={62}>
            <Outlet />
          </Flex>
        </Flex>
      </Paper>
    </Center>
  );
}
