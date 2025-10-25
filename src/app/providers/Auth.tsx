import { ReactNode, useEffect, useState } from "react";
import { Center, Loader } from "@mantine/core";
import { useMeStore } from "../../entities/me/model/meStore";
import Error403 from "../../pages/Errors/Error404/Error403.page";
import axios from "axios";
const API = import.meta.env.VITE_API;

export default function Auth({ children }: { children: ReactNode }) {
  const { setUserEmail, setUserRole, setUserName } = useMeStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API}/users`, {
        withCredentials: true,
      })
      .then((res) => {
        const responseData = res.data;

        // Проверяем, что пользователь найден и имеет нужную роль
        if (
          responseData &&
          responseData.id &&
          (responseData.role === "Admin" ||
            responseData.role === "Analyst" ||
            responseData.role === "User")
        ) {
          setUserRole(responseData.role);
          setUserEmail(responseData.email);
          setUserName(responseData.name);
          setError(null);
        } else {
          // Если пользователь найден, но нет нужной роли
          setError({ error: "Unauthorized", message: "Недостаточно прав" });
        }
      })
      .catch((err) => {
        console.error("Auth error:", err);
        // Проверяем конкретно 404 ошибку "Пользователь не найден"
        if (
          err.response?.status === 404 ||
          err.response?.data?.error === "Not Found"
        ) {
          setError({ error: "Not Found", message: "Пользователь не найден" });
        } else {
          setError(err.response?.data || { error: "Network error" });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Показываем загрузку до тех пор, пока не завершится проверка авторизации
  if (loading) {
    return (
      <Center w="100vw" h="100vh">
        <Loader />
      </Center>
    );
  }

  // Показываем ошибку только если есть конкретная ошибка
  if (error) {
    return <Error403 />;
  }

  // Если пользователь авторизован и имеет нужную роль
  return <>{children}</>;
}
