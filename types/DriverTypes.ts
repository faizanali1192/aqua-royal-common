export type DriverAppLanguage = "en" | "ur";

export interface DriverAppAccount {
  driverId: number;
  ownerUserId?: number;
  name: string;
  username: string;
  phone: string;
  email: string;
  homeAddress: string;
  passwordSample: string;
  defaultLanguage: DriverAppLanguage;
  notes: string;
  active: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface DriverCustomerAccess {
  accessId: number;
  ownerUserId?: number;
  driverId: number;
  customerId: number;
  customerRecords: boolean;
  cylinderHistory: boolean;
  enabled: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface DriverAppHubSummary {
  totalDrivers: number;
  activeDrivers: number;
  accessMappings: number;
}

export interface DriverAppHubResponse {
  status: string;
  data: {
    drivers: DriverAppAccount[];
    access: DriverCustomerAccess[];
    summary: DriverAppHubSummary;
  };
}

export interface CreateDriverAppAccountRequest {
  name: string;
  username?: string;
  phone: string;
  email?: string;
  homeAddress?: string;
  password?: string;
  defaultLanguage?: DriverAppLanguage;
  notes?: string;
  active?: boolean;
}

export interface UpdateDriverAppAccountRequest
  extends Partial<CreateDriverAppAccountRequest> {}

export interface UpsertDriverCustomerAccessRequest {
  customerRecords?: boolean;
  cylinderHistory?: boolean;
  enabled?: boolean;
}

export interface DriverAppMutationResponse<T> {
  status: string;
  data: T;
  message: string;
}

export interface DriverAppLoginRequest {
  username: string;
  password: string;
  ownerUserId?: number | null;
}

export interface DriverAppLoginResponse {
  status: string;
  message: string;
  accessToken: string;
  data: {
    driver: Omit<DriverAppAccount, "passwordSample">;
  };
}
