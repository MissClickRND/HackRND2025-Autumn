import { useState } from "react";
import { IProject } from "../../type";
import { useNotifications } from "../../../../../shared/lib/hooks/useNotifications";
import { Project } from "../../api";

export const useProject = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState();

  const { showError } = useNotifications();

  const fetchProject = async ({ body }: { body: IProject }) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      const result = await Project(body);
      setData(result);
    } catch (err) {
      setIsError(true);
      setError(err instanceof Error ? err.message : "Ошибка");
      showError(err instanceof Error ? err.message : "Ошибка ");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, error, data, project: fetchProject };
};
