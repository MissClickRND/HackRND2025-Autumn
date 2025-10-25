import {
  Button,
  Group,
  MultiSelect,
  NumberInput,
  Paper,
  Select,
  TextInput,
} from "@mantine/core";

export default function AllInfoSection({
  form,
  guides,
}: {
  form: any;
  guides: any;
}) {
  return (
    <Paper radius={10} withBorder p={16} mb={20}>
      {/* Первая строка: Название организации и ИНН */}
      <Group grow mb="md">
        <TextInput
          label="Название Организации"
          placeholder="Введите название"
          {...form.getInputProps("nameOrganization")}
          required
        />
        <TextInput
          label="ИНН Организации"
          placeholder="Введите ИНН"
          {...form.getInputProps("INN")}
          required
        />
      </Group>

      {/* Вторая строка: Название проекта */}
      <TextInput
        label="Название проекта"
        placeholder="Введите название проекта"
        {...form.getInputProps("nameProject")}
        mb="md"
        required
      />

      {/* Третья строка: Услуга и Тип платежа */}
      <Group grow mb="md">
        <Select
          label="Услуга"
          placeholder="Выберите услугу"
          data={[]}
          {...form.getInputProps("service")}
          required
        />
        <Select
          label="Тип платежа"
          placeholder="Выберите тип платежа"
          data={[
            { value: "type1", label: "Тип 1" },
            { value: "type2", label: "Тип 2" },
            { value: "type3", label: "Тип 3" },
          ]}
          {...form.getInputProps("typePayment")}
          required
        />
      </Group>

      {/* Четвёртая строка: Этап проекта и Вероятность реализации */}
      <Group grow mb="md">
        <Select
          label="Этап проекта"
          placeholder="Выберите этап"
          data={[
            { value: "stage1", label: "Этап 1" },
            { value: "stage2", label: "Этап 2" },
            { value: "stage3", label: "Этап 3" },
          ]}
          {...form.getInputProps("stageProject")}
          required
        />
        <TextInput
          label="Вероятность реализации"
          placeholder="Введите вероятность"
          {...form.getInputProps("probability")}
        />
      </Group>

      {/* Пятая строка: Менеджер и Сегмент бизнеса */}
      <Group grow mb="md">
        <TextInput
          label="Менеджер"
          placeholder="Введите имя менеджера"
          {...form.getInputProps("manager")}
          required
        />
        <Select
          label="Сегмент бизнеса"
          placeholder="Выберите сегмент"
          data={[
            { value: "segment1", label: "Сегмент 1" },
            { value: "segment2", label: "Сегмент 2" },
            { value: "segment3", label: "Сегмент 3" },
          ]}
          {...form.getInputProps("segment")}
          required
        />
      </Group>

      {/* Шестая строка: Год реализации */}
      <NumberInput
        label="Год реализации"
        placeholder="Выберите год"
        min={1900}
        max={2100}
        {...form.getInputProps("age")}
        mb="md"
        required
      />

      {/* Дополнительно: Критерии */}
      <MultiSelect
        label="Дополнительно"
        placeholder="Выберите критерии"
        data={[
          { value: "criterion1", label: "Отраслевое решение" },
          { value: "criterion2", label: "Принимаемый к прогнозу" },
          { value: "criterion3", label: "Реализация через ДЗО" },
          {
            value: "criterion4",
            label: "Требуется контроль статуса от руководства",
          },
        ]}
        {...form.getInputProps("criteria")}
        mb="md"
      />

      {/* Принимаемый к оценке */}
      <Select
        label="Принимаемый к оценке"
        placeholder="Выберите тип оценки"
        data={[
          { value: "accept1", label: "Тип оценки 1" },
          { value: "accept2", label: "Тип оценки 2" },
          { value: "accept3", label: "Тип оценки 3" },
        ]}
        {...form.getInputProps("acceptedForEvaluation")}
        mb="md"
      />

      {/* Отраслевой менеджер */}
      <TextInput
        label="Отраслевой менеджер"
        placeholder="Введите имя отраслевого менеджера"
        {...form.getInputProps("industryManager")}
        mb="md"
      />

      {/* Номер проекта */}
      <TextInput
        label="Номер проекта"
        placeholder="Введите номер проекта"
        {...form.getInputProps("numProject")}
        mb="md"
      />

      {/* Кнопка сохранения */}
      <Button bdrs={10} fullWidth color="var(--main-color-orange)" mt="xl">
        Скачать отчет
      </Button>
    </Paper>
  );
}
