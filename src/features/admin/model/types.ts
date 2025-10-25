export interface NonVerifyUserResponse {
  id: number;
  email: string;
  name: string;
  role: "NotVerify" | "Admin" | "Analyst" | "User";
}

export interface AllUsersResponse {
  id: number;
  email: string;
  name: string;
  role: "NotVerify" | "Admin" | "Analyst" | "User";
}

export interface EditUserRequest {
  id?: number;
  userId?: number;
  email?: string;
  name?: string;
  role?: "NotVerify" | "Admin" | "Analyst" | "User";
  password?: string;
}

export interface IVerifyUserRequest {
  userId: number;
  role: string;
}

export interface IDeleteUserRequest {
  userId: number;
}
