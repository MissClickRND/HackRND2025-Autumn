import { ActionIcon, Box, Center, Table } from "@mantine/core";
import { AllUsersResponse } from "../../../../../features/admin/model/types";
import { roles } from "../../../../../entities/users/roles";
import { IconEdit } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { EditUserModal } from "./EditUserModal";
import { useState } from "react";

export default function AllUsersTable({
  data,
  check,
  setCheck,
}: {
  data: AllUsersResponse[] | [];
  check: boolean;
  setCheck: (check: boolean) => void;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectData, setSelectData] = useState<AllUsersResponse | null>(null);

  const ths = (
    <Table.Tr style={{ borderBottom: "1px solid #CBCBCB" }}>
      <Table.Th>ID</Table.Th>
      <Table.Th>ФИО</Table.Th>
      <Table.Th>Email</Table.Th>
      <Table.Th>Роль</Table.Th>
      <Table.Th>Действие</Table.Th>
    </Table.Tr>
  );

  const rows = data.map((element: AllUsersResponse) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{roles[element.role]}</Table.Td>
      <Table.Td>
        <ActionIcon
          onClick={() => {
            setSelectData(element);
            open();
          }}
          color="var(--main-color)"
          variant="transparent"
        >
          <IconEdit />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <EditUserModal
        data={selectData}
        opened={opened}
        onClose={close}
        check={check}
        setCheck={setCheck}
      />

      <Box p={5} bdrs={10} style={{ border: "1px solid #CBCBCB" }} h={330}>
        <Table.ScrollContainer minWidth={250} maxHeight={300}>
          <Table
            captionSide="bottom"
            withRowBorders={false}
            verticalSpacing="sm"
          >
            <Table.Thead>{ths}</Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
        {data.length === 0 && (
          <Center py={20}>Пользователей не существует</Center>
        )}
      </Box>
    </>
  );
}
