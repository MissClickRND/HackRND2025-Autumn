import apiClient from "../../../app/api/axiosInstance";
import { baseUrl, endpoints } from "../../../shared/api";
import { IDeleteUserRequest, IVerifyUserRequest } from "./types";

export const NonVerifyUsers = async () => {
  const res = await apiClient.get(baseUrl + endpoints.NON_VERIFY_USERS);
  if (res.status !== 200 && res.status !== 201)
    throw new Error("Ошибка запроса к пользователям");
  return res.data;
};

export const VerifyUser = async (body: IVerifyUserRequest) => {
  const res = await apiClient.patch(baseUrl + endpoints.VERIFY_USER, body);
  if (res.status !== 200 && res.status !== 201)
    throw new Error("Ошибка верификации пользователя");
  return res.data;
};

export const DeleteUser = async (body: IDeleteUserRequest) => {
  const res = await apiClient.delete(baseUrl + endpoints.DELETE_USER, {
    data: body,
  });
  if (res.status !== 200 && res.status !== 201)
    throw new Error("Ошибка удаления пользователя");
  return res.data;
};
