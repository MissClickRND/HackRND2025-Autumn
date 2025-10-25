import { useState } from "react";
import { useNotifications } from "../../../../../shared/lib/hooks/useNotifications";
import { IProjectTableResponse } from "../../type";
import { AllProjects } from "../../api";

export const useAllProjects = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<[] | IProjectTableResponse[]>([]);

  const { showError } = useNotifications();

  const fetchAllProjects = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      const result = await AllProjects();
      setData(result);
    } catch (err) {
      setIsError(true);
      setError(
        err instanceof Error ? err.message : "Ошибка при запросе к проектам"
      );
      showError(
        err instanceof Error ? err.message : "Ошибка при запросе к проектам"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, isError, error, allProjects: fetchAllProjects };
};
