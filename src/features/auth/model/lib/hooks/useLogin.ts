import { useState } from "react";
import { ILoginRequest } from "../../types";
import { login } from "../../api";
import { useNotifications } from "../../../../../shared/lib/hooks/useNotifications";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { showError, showSuccess } = useNotifications();

  const fetchLogin = async (body: ILoginRequest) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      await login(body);
      showSuccess("Вы успешно вошли");
    } catch (err) {
      setIsError(true);
      setError(err instanceof Error ? err.message : "Ошибка при авторизации");
      showError(err instanceof Error ? err.message : "Ошибка при авторизации");
    } finally {
      setIsLoading(false);
      window.location.pathname = "/";
    }
  };

  return { isLoading, isError, error, login: fetchLogin };
};
