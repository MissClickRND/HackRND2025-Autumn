import { Box, Button, Center, Flex, Table } from "@mantine/core";
import { NonVerifyUserResponse } from "../../../../../features/admin/model/types";
import { roles } from "../../../../../entities/users/roles";
import { useVerifyUser } from "../../../../../features/admin/lib/hooks/useVerifyUser";
import { useDeleteUser } from "../../../../../features/admin/lib/hooks/useDeleteUser";

const ButtonsActive = ({
  accept,
  reject,
}: {
  accept: () => void;
  reject: () => void;
}) => {
  return (
    <Flex gap={15}>
      <Button
        onClick={accept}
        bg="var(--main-color)"
        w={130}
        fw="400"
        h={28}
        bdrs={30}
      >
        Подтвердить
      </Button>
      <Button onClick={reject} bg="#FF0000" w={130} h={28} fw="400" bdrs={30}>
        Отклонить
      </Button>
    </Flex>
  );
};

export default function NonVerifyUserTable({
  data,
  check,
  setCheck,
}: {
  data: NonVerifyUserResponse[] | [];
  check: boolean;
  setCheck: (check: boolean) => void;
}) {
  const { verify } = useVerifyUser();
  const { deleted } = useDeleteUser();

  const accept = (element: NonVerifyUserResponse) => {
    verify({
      userId: element.id,
      role: "User",
    });
    setCheck(!check);
  };
  const reject = (element: NonVerifyUserResponse) => {
    deleted({ userId: element.id });
    setCheck(!check);
  };

  const ths = (
    <Table.Tr style={{ borderBottom: "1px solid #CBCBCB" }}>
      <Table.Th>ID</Table.Th>
      <Table.Th>ФИО</Table.Th>
      <Table.Th>Email</Table.Th>
      <Table.Th>Роль</Table.Th>
      <Table.Th w={400}>Действия</Table.Th>
    </Table.Tr>
  );

  const rows = data.map((element: NonVerifyUserResponse) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{roles[element.role]}</Table.Td>
      <Table.Td>
        <ButtonsActive
          accept={() => accept(element)}
          reject={() => reject(element)}
        />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box p={5} bdrs={10} style={{ border: "1px solid #CBCBCB" }} h={260}>
      <Table.ScrollContainer minWidth={250} maxHeight={240}>
        <Table captionSide="bottom" withRowBorders={false} verticalSpacing="sm">
          <Table.Thead>{ths}</Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      {data.length === 0 && (
        <Center py={20}>Пользователей на подтверждение нет</Center>
      )}
    </Box>
  );
}
