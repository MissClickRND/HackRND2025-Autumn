export interface NonVerifyUserData {
  id: number;
  email: string;
  name: string;
  role: "NotVerify" | "Admin" | "Analyst" | "User";
}

export interface IVerifyUserRequest {
  userId: number;
  role: string;
}

export interface IDeleteUserRequest {
  userId: number;
}
