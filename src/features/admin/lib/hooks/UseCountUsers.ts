import { useState } from "react";
import { useNotifications } from "../../../../shared/lib/hooks/useNotifications";
import { CountUsers } from "../../model/api";

export const useCountUsers = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState([]);

  const { showError } = useNotifications();

  const fetchCountUsers = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      const result = await CountUsers();
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

  return { isLoading, data, isError, error, CountUsers: fetchCountUsers };
};
