import { ActionIcon, Box, Center, Table } from "@mantine/core";
import { projectTable } from "../../../entities/projects/projectTable";
import { IconEye } from "@tabler/icons-react";

export default function ProjectsTable({ data }: { data: projectTable[] }) {
  const ths = (
    <Table.Tr style={{ borderBottom: "1px solid #CBCBCB" }}>
      <Table.Th>Сегмент</Table.Th>
      <Table.Th>ИНН</Table.Th>
      <Table.Th>Организация</Table.Th>
      <Table.Th>Проект</Table.Th>
      <Table.Th>Этап</Table.Th>
      <Table.Th>Год</Table.Th>
      <Table.Th>Услуга</Table.Th>
      <Table.Th>Менеджер</Table.Th>
      <Table.Th>Сумма</Table.Th>
      <Table.Th>Действие</Table.Th>
    </Table.Tr>
  );

  const rows = data.map((element: projectTable) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.segment}</Table.Td>
      <Table.Td>{element.INN}</Table.Td>
      <Table.Td>{element.organization}</Table.Td>
      <Table.Td>{element.project}</Table.Td>
      <Table.Td>{element.stage}</Table.Td>
      <Table.Td>{element.age}</Table.Td>
      <Table.Td>{element.service}</Table.Td>
      <Table.Td>{element.manager}</Table.Td>
      <Table.Td>{element.amount}₽</Table.Td>
      <Table.Td>
        <ActionIcon color="var(--subtitle)" variant="transparent">
          <IconEye />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Box p={5} bdrs={10} style={{ border: "1px solid #CBCBCB" }} h={330}>
        <Table.ScrollContainer minWidth={250} maxHeight={300}>
          <Table captionSide="bottom" withRowBorders verticalSpacing="sm">
            <Table.Thead>{ths}</Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
        {data.length === 0 && <Center py={20}>Проектов не существует</Center>}
      </Box>
    </>
  );
}
