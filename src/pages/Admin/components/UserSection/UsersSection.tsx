import { Box, Flex, Text } from "@mantine/core";
import { useNonVerifyUser } from "../../../../features/admin/lib/hooks/useNonVerifyUser";
import { useEffect, useMemo, useState } from "react";
import NonVerifyUserTable from "./components/NonVerifyUserTable";
import AllUsersTable from "./components/AllUsersTable";
import { useAllUsers } from "../../../../features/admin/lib/hooks/useAllUsers";
import { useCountUsers } from "../../../../features/admin/lib/hooks/UseCountUsers";
import { PieChart } from "@mantine/charts";

const Colors = [
  { color: "#7700FF", title: "Администраторы" },
  { color: "#E8D2ED", title: "Аналитики" },
  { color: "#749FD6", title: "Пользователи" },
  { color: "#FF4F12", title: "Не верифицированы" },
];

const roleTranslations: Record<string, string> = {
  Admin: "Администратор",
  Analyst: "Аналитик",
  User: "Пользователь",
  NotVerify: "Не верифицирован",
};

export default function UsersSections() {
  const { data: dataAll, AllUsers } = useAllUsers();
  const { data: countUsers, CountUsers } = useCountUsers();
  const { NonVerifyUser, data: dataNonVerify } = useNonVerifyUser();

  const [updateNonVerifyUser, setUpdateNonVerifyUser] = useState(false);
  const [updateAllUser, setUpdateAllUser] = useState(false);

  const translatedCountUsers = useMemo(() => {
    if (!countUsers) return [];
    return countUsers.map((item) => ({
      //@ts-ignore
      ...item,
      //@ts-ignore
      name: roleTranslations[item.name] || item.name,
    }));
  }, [countUsers]);

  useEffect(() => {
    NonVerifyUser();
  }, [updateNonVerifyUser]);

  useEffect(() => {
    AllUsers();
  }, [updateAllUser]);

  useEffect(() => {
    CountUsers();
  }, [updateAllUser, updateNonVerifyUser]);
  return (
    <>
      <Text fw={500} mb={10}>
        Требуют верификации
      </Text>
      <NonVerifyUserTable
        check={updateNonVerifyUser}
        setCheck={setUpdateNonVerifyUser}
        data={dataNonVerify}
      />

      <Flex justify="space-between" gap={20} mt={26}>
        <Box w="60%">
          <Text fw={500} mb={10}>
            Все пользователи
          </Text>
          <AllUsersTable
            data={dataAll}
            check={updateAllUser}
            setCheck={setUpdateAllUser}
          />
        </Box>

        <Box w="40%" h="200px">
          <Text fw={500} mb={10}>
            Статистика ролей пользователей
          </Text>
          <Flex
            justify="space-between"
            gap={10}
            style={{ border: "1px solid #CBCBCB" }}
            bdrs={10}
          >
            <Flex direction="column" px={20} justify="center" gap={40}>
              {Colors.map((el, index) => (
                <Flex gap={20} align="center" key={index}>
                  <Box w={30} h={30} bdrs={10} bg={el.color} />
                  <Text fw={400}>{el.title}</Text>
                </Flex>
              ))}
            </Flex>
            <PieChart
              w="50%"
              withTooltip
              h="330px"
              strokeWidth={1.3}
              size={250}
              withLabelsLine={false}
              labelsPosition="outside"
              labelsType="percent"
              withLabels
              data={translatedCountUsers}
            />
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
