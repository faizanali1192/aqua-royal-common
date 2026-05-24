export type UserRole = "superAdmin" | "admin" | "driver" | "customer";

enum UserRoles {
  superAdmin,
  admin,
  driver,
  customer,
}

export interface AddUserParamType {
  userName: string;
  fullName: string;
  email: string;
  userRole: UserRoles;
  password: string;
}

export interface AddUserResponseType {
  status: string;
  data: AddUserParamType;
}

export interface LoginApiParamType {
  userName: string;
  email?: string;
  password: string;
}
export interface LoginApiResponseType {
  status: string;
  message: string;
  accessToken: string;
  refreshToken: string;
  user: AuthUserType;
}

export interface AuthUserType {
  userId: number;
  userName: string;
  fullName: string;
  email: string;
  userRole: UserRole;
  isEmailVerified: boolean;
}

export interface RegisterApiParamType {
  userName: string;
  fullName: string;
  email: string;
  password: string;
}

export interface VerifyRegistrationOtpParamType {
  email: string;
  otp: string;
}

export interface ForgotPasswordApiParamType {
  email: string;
}

export interface ResetPasswordApiParamType {
  email: string;
  otp: string;
  password: string;
}

export interface AuthMessageResponseType {
  status: string;
  message: string;
  user?: AuthUserType;
}

export interface DecodedToken {
  userId: string;
  userRole: string;
  email: string;
  iat: number;
  exp: number;
}
