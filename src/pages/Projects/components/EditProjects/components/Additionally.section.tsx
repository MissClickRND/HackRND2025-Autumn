import { Text, Paper, Textarea } from "@mantine/core";

export default function Additionally({ form }: { form: any }) {
  return (
    <Paper radius={10} withBorder p={16} mb={20}>
      <Text fw={500} mb="md">
        Текущий статус по проекту
      </Text>
      <Textarea
        placeholder="Введите текущий статус проекта"
        {...form.getInputProps("statusComment")}
        autosize
        minRows={3}
        maxRows={6}
        mb="md"
      />

      <Text fw={500} mb="md">
        Что сделано за период
      </Text>
      <Textarea
        placeholder="Опишите, что было сделано за отчётный период"
        {...form.getInputProps("periodComment")}
        autosize
        minRows={3}
        maxRows={6}
        mb="md"
      />

      <Text fw={500} mb="md">
        Планы на следующий период
      </Text>
      <Textarea
        placeholder="Опишите планы на следующий период"
        {...form.getInputProps("plansComment")}
        autosize
        minRows={3}
        maxRows={6}
        mb="md"
      />
    </Paper>
  );
}
