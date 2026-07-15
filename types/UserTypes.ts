export type UserRole = "superAdmin" | "admin" | "driver" | "customer";
export type UserAccountStatus = "pending" | "active" | "suspended";

export const ADMIN_PAGE_PERMISSIONS = [
  "dashboard",
  "aiAssistant",
  "notes",
  "customers",
  "records",
  "employees",
  "attendance",
  "salaryManagement",
  "employeeData",
  "bottles",
  "batches",
  "sale",
  "expenses",
  "bill",
  "customBill",
  "paymentLogs",
  "credical",
  "backup",
  "setting",
  "userAdmin",
] as const;

export type AdminPagePermission = (typeof ADMIN_PAGE_PERMISSIONS)[number];

export const SUPER_ADMIN_PAGE_PERMISSIONS: AdminPagePermission[] = [
  ...ADMIN_PAGE_PERMISSIONS,
];

export const USER_ROLES: UserRole[] = [
  "superAdmin",
  "admin",
  "driver",
  "customer",
];

export const USER_ACCOUNT_STATUSES: UserAccountStatus[] = [
  "pending",
  "active",
  "suspended",
];

export interface AddUserParamType {
  userName: string;
  fullName: string;
  email: string;
  userRole: UserRole;
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
  profileDisplayName?: string | null;
  profileImageDataUrl?: string | null;
  mobileUserName?: string | null;
  mobilePasswordSample?: string | null;
  mobileDefaultLanguage?: "en" | "ur" | string | null;
  mobileLastLoginAt?: string | null;
  email: string;
  userRole: UserRole;
  accountStatus: UserAccountStatus;
  pagePermissions: AdminPagePermission[];
  isEmailVerified: boolean;
  createdAt?: string;
  updatedAt?: string;
  lastLoginAt?: string | null;
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

export interface UpdateCurrentUserProfileRequest {
  profileDisplayName?: string | null;
  profileImageDataUrl?: string | null;
}

export interface UpdateCurrentUserProfileResponse {
  status: string;
  message: string;
  user: AuthUserType;
}

export interface UpdateCurrentUserMobileCredentialsRequest {
  username: string;
  password?: string;
  defaultLanguage?: "en" | "ur";
}

export interface UpdateCurrentUserMobileCredentialsResponse {
  status: string;
  message: string;
  user: AuthUserType;
}

export interface AdminUsersSummary {
  totalUsers: number;
  pendingUsers: number;
  activeUsers: number;
  suspendedUsers: number;
  superAdmins: number;
}

export interface AdminUsersResponseType {
  status: string;
  data: AuthUserType[];
  summary: AdminUsersSummary;
}

export interface CreateAdminUserRequest {
  userName: string;
  fullName: string;
  email: string;
  password: string;
  userRole: UserRole;
  accountStatus: UserAccountStatus;
  pagePermissions: AdminPagePermission[];
}

export interface UpdateAdminUserRequest {
  userRole?: UserRole;
  accountStatus?: UserAccountStatus;
  isEmailVerified?: boolean;
  pagePermissions?: AdminPagePermission[];
}

export interface AdminUserMutationResponseType {
  status: string;
  message: string;
  user: AuthUserType;
}

export interface DecodedToken {
  userId: string;
  sub?: string;
  userRole: string;
  email: string;
  exp: number;
  iat?: number;
}
