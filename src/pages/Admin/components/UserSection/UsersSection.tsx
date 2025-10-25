import { Text } from "@mantine/core";
import { useNonVerifyUser } from "../../../../features/admin/lib/hooks/useNonVerifyUser";
import { useEffect, useState } from "react";
import NonVerifyUserTable from "./components/NonVerifyUserTable";
export default function UsersSections() {
  const { register, data } = useNonVerifyUser();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    register();
  }, [check]);

  return (
    <>
      <Text fw={500} mb={10}>
        Требуют верификации
      </Text>
      <NonVerifyUserTable check={check} setCheck={setCheck} data={data} />
    </>
  );
}
