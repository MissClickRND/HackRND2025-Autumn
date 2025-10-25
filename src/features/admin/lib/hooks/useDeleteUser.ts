import { useState } from "react";
import { DeleteUser } from "../../model/api";
import { useNotifications } from "../../../../shared/lib/hooks/useNotifications";
import { IDeleteUserRequest } from "../../model/types";

export const useDeleteUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { showError } = useNotifications();

  const fetchDeleteUser = async (body: IDeleteUserRequest) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      await DeleteUser(body);
    } catch (err) {
      setIsError(true);
      setError(
        err instanceof Error ? err.message : "Ошибка удаления пользователя"
      );
      showError(
        err instanceof Error ? err.message : "Ошибка удаления пользователя"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, error, deleted: fetchDeleteUser };
};
