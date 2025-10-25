import apiClient from "../../../app/api/axiosInstance";
import { baseUrl, endpoints } from "../../../shared/api";
import { IProject } from "./type";

export const AllProjects = async () => {
  const res = await apiClient.get(baseUrl + endpoints.ALL_PROJECTS);
  if (res.status !== 200 && res.status !== 201)
    throw new Error("Ошибка получения проектов");
  return res.data;
};

export const Project = async (body: IProject) => {
  const res = await apiClient.post(baseUrl + endpoints.ALL_PROJECTS, body);
  if (res.status !== 200 && res.status !== 201)
    throw new Error("Ошибка получения проекта");
  return res.data;
};
