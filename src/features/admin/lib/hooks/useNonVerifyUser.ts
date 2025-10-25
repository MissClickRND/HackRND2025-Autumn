import { useState } from "react";
import { NonVerifyUsers } from "../../model/api";
import { useNotifications } from "../../../../shared/lib/hooks/useNotifications";
import { NonVerifyUserData } from "../../model/types";

export const useNonVerifyUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<[] | NonVerifyUserData[]>([]);

  const { showError } = useNotifications();

  const fetchRegister = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      const result = await NonVerifyUsers();
      setData(result);
    } catch (err) {
      setIsError(true);
      setError(
        err instanceof Error
          ? err.message
          : "Ошибка при запросе к пользователям"
      );
      showError(
        err instanceof Error
          ? err.message
          : "Ошибка при запросе к пользователям"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, isError, error, register: fetchRegister };
};
