import { useState } from "react";
import { VerifyUser } from "../../model/api";
import { useNotifications } from "../../../../shared/lib/hooks/useNotifications";
import { IVerifyUserRequest } from "../../model/types";

export const useVerifyUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { showError } = useNotifications();

  const fetchVerifyUser = async (body: IVerifyUserRequest) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      await VerifyUser(body);
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

  return { isLoading, isError, error, verify: fetchVerifyUser };
};
