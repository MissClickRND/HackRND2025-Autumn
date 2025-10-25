import { Box, Button, Flex, Paper, Text } from "@mantine/core";
import { IconFolder, IconPlus, IconX } from "@tabler/icons-react";
import ProjectsTable from "./components/ProjectsTable";
import { useState } from "react";
import EditProjects from "./components/EditProjects/EditProjects";
import { projectTable } from "../../entities/projects/projectTable";
import { useForm } from "@mantine/form";

export default function Projects() {
  const [segment, setSegment] = useState(false);
  //запрос на получение всех проектов
  const data: projectTable[] = [
    {
      id: 1,
      segment: "Крупный бизнес",
      INN: "123122411",
      organization: "ООО “Ромашка”",
      project: "Внедрение системы управленческого учета",
      stage: "Реализация",
      age: 2025,
      service: "ИТ-консалтинг",
      manager: "Иванов Н.Н",
      amount: 12150000,
    },
    {
      id: 2,
      segment: "Крупный бизнес",
      INN: "123122411",
      organization: "ООО “Ромашка”",
      project: "Внедрение системы управленческого учета",
      stage: "Реализация",
      age: 2025,
      service: "ИТ-консалтинг",
      manager: "Иванов Н.Н",
      amount: 12150000,
    },
  ];

  const form = useForm({
    initialValues: {
      nameOrganization: "",
      email: "",
      INN: "",
      nameProject: "",
      service: "",
      typePayment: "",
      stageProject: "",
      probability: "",
      manager: "",
      segment: "",
      age: 2025,
      criteria: [],
      acceptedForEvaluation: "",
      industryManager: "",
      numProject: "",

      revenue: [
        { year: 2025, month: 1, sum: 0, status: 1 },
        { year: 2025, month: 2, sum: 0, status: 1 },
        { year: 2025, month: 3, sum: 0, status: 1 },
        { year: 2025, month: 4, sum: 0, status: 1 },
        { year: 2025, month: 5, sum: 0, status: 1 },
        { year: 2025, month: 6, sum: 0, status: 1 },
        { year: 2025, month: 7, sum: 0, status: 1 },
        { year: 2025, month: 8, sum: 0, status: 1 },
        { year: 2025, month: 9, sum: 0, status: 1 },
        { year: 2025, month: 10, sum: 0, status: 1 },
        { year: 2025, month: 11, sum: 0, status: 1 },
        { year: 2025, month: 12, sum: 0, status: 1 },
      ],

      expenses: [
        { year: 2025, month: 2, sum: 0, status: 1, type: 1 },
        { year: 2025, month: 3, sum: 0, status: 1, type: 1 },
        { year: 2025, month: 4, sum: 0, status: 1, type: 1 },
        { year: 2025, month: 1, sum: 0, status: 1, type: 1 },
        { year: 2025, month: 5, sum: 0, status: 1, type: 1 },
        { year: 2025, month: 6, sum: 0, status: 1, type: 1 },
        { year: 2025, month: 7, sum: 0, status: 1, type: 1 },
        { year: 2025, month: 8, sum: 0, status: 1, type: 1 },
        { year: 2025, month: 9, sum: 0, status: 1, type: 1 },
        { year: 2025, month: 10, sum: 0, status: 1, type: 1 },
        { year: 2025, month: 11, sum: 0, status: 1, type: 1 },
        { year: 2025, month: 12, sum: 0, status: 1, type: 1 },
      ],

      statusComment: "",
      periodComment: "",
      plansComment: "",
    },
  });

  const handleSubmit = () => {
    console.log(form.values);
  };

  return (
    <Box px={{ base: 10, md: 50 }} py={25} style={{ flexGrow: 1 }}>
      <Text fz={20} fw="500" mb={18}>
        Проекты
      </Text>

      <Paper radius={10} withBorder p={16} mb={20}>
        <Flex w="100%" justify="space-between" align="center">
          <Text c="var(--subtitle)">
            {segment ? "Управление проектом" : "Список всех проектов"}
          </Text>
          {!segment ? (
            <Button color="var(--main-color)" onClick={() => setSegment(true)}>
              <Flex align="center" gap={5}>
                <IconPlus />
                Новый проект
              </Flex>
            </Button>
          ) : (
            <Flex gap={10}>
              <Button
                color="var(--main-color)"
                variant="outline"
                onClick={() => setSegment(false)}
              >
                <Flex align="center" gap={5}>
                  <IconX />
                  Отмена
                </Flex>
              </Button>
              <Button
                color="var(--main-color)"
                variant="filled"
                onClick={handleSubmit}
              >
                <Flex align="center" gap={5}>
                  <IconFolder />
                  Сохранить
                </Flex>
              </Button>
            </Flex>
          )}
        </Flex>
      </Paper>
      {!segment && <ProjectsTable data={data} />}
      <form onSubmit={form.onSubmit(handleSubmit)}>
        {segment && <EditProjects form={form} />}
      </form>
    </Box>
  );
}
