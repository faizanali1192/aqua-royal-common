enum UserRoles {
  superAdmin,
  admin,
  driver,
  customer,
}

export interface AddUserParamType {
  userName: string;
  email: string;
  userRole: UserRoles;
  password: string;
}

export interface AddUserResponseType {
  status: string;
  data: AddUserParamType;
}

export interface LoginApiParamType {
  email: string;
  password: string;
}
export interface LoginApiResponseType {
  message: string;
  accessToken: string;
  refreshToken: string;
}

export interface DecodedToken {
  userId: string;
  userRole: string;
  email: string;
  iat: number;
  exp: number;
}
