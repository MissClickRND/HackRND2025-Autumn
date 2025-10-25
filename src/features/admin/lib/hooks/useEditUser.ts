import { useState } from "react";
import { EditUser } from "../../model/api";
import { useNotifications } from "../../../../shared/lib/hooks/useNotifications";
import { EditUserRequest } from "../../model/types";

export const useEditUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { showError } = useNotifications();

  const fetchEditUser = async (body: EditUserRequest) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      await EditUser(body);
    } catch (err) {
      setIsError(true);
      setError(
        err instanceof Error ? err.message : "Ошибка верификации пользователя"
      );
      showError(
        err instanceof Error ? err.message : "Ошибка верификации пользователя"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, error, editUser: fetchEditUser };
};
