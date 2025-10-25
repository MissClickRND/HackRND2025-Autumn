import {
  Box,
  Group,
  Paper,
  Select,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { months } from "../../../../../entities/projects/projectForm";

export default function RevenueSection({ form }: { form: any }) {
  const revenueData = form.values.revenue || [];

  const rows = months.map((month, index) => {
    const monthNumber = index + 1; // 1-12
    const rowKey = `revenue-${monthNumber}`;

    // Находим данные по месяцу
    const existingRow = revenueData.find(
      (r: any) =>
        r.month === monthNumber && r.year === (form.values.age || 2025)
    );

    // Путь к полю в форме
    const sumPath = `revenue.${index}.sum`;
    const statusPath = `revenue.${index}.status`;

    return (
      <Table.Tr key={rowKey}>
        <Table.Td>
          <Text size="sm">{form.values.age || 2025}</Text>
        </Table.Td>
        <Table.Td>
          <Text size="sm">{month}</Text>
        </Table.Td>
        <Table.Td>
          <TextInput
            placeholder="Введите сумму"
            {...form.getInputProps(sumPath)}
            size="sm"
            style={{ width: "100%" }}
          />
        </Table.Td>
        <Table.Td>
          <Select
            placeholder="Выберите статус начисления"
            data={[
              { value: "1", label: "Не начато" },
              { value: "2", label: "В процессе" },
              { value: "3", label: "Завершено" },
              { value: "4", label: "Отменено" },
            ]}
            {...form.getInputProps(statusPath)}
            size="sm"
            style={{ width: "100%" }}
          />
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Paper radius={10} withBorder p={16} mb={20}>
      <Group justify="space-between" mb="md">
        <Text fw={500}>Информация по выручке проекта</Text>
        <Select
          placeholder="Выберите год"
          data={[
            { value: "2024", label: "2024" },
            { value: "2025", label: "2025" },
            { value: "2026", label: "2026" },
          ]}
          value={String(form.values.age || 2025)}
          onChange={(value) => form.setFieldValue("age", Number(value))}
          size="sm"
          w={120}
        />
      </Group>

      <Box
        style={{
          border: "1px solid #CBCBCB",
          borderRadius: 8,
          overflow: "hidden",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Table.ScrollContainer minWidth={600}>
          <Table withRowBorders verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Год</Table.Th>
                <Table.Th>Месяц</Table.Th>
                <Table.Th>Сумма</Table.Th>
                <Table.Th>Статус начисления</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Box>
    </Paper>
  );
}
