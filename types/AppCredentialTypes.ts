export type AppCredentialLanguage = "en" | "ur";

export interface CustomerAppOrganization {
  organizationId: number;
  ownerUserId?: number;
  name: string;
  active: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CustomerAppBranch {
  branchId: number;
  ownerUserId?: number;
  organizationId: number | null;
  customerId: number;
  branchName: string;
  active: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CustomerAppCredential {
  credentialId: number;
  ownerUserId?: number;
  username: string;
  passwordSample: string;
  defaultLanguage: AppCredentialLanguage;
  organizationId: number | null;
  branchIds: number[];
  active: boolean;
  createdAt?: string;
  updatedAt?: string;
  lastLoginAt?: string | null;
}

export interface CustomerAppHubSummary {
  totalOrganizations: number;
  activeCredentials: number;
  mappedCustomers: number;
  totalBranches: number;
}

export interface CustomerAppHubResponse {
  status: string;
  data: {
    organizations: CustomerAppOrganization[];
    branches: CustomerAppBranch[];
    credentials: CustomerAppCredential[];
    summary: CustomerAppHubSummary;
  };
}

export interface CreateCustomerAppOrganizationRequest {
  name: string;
  customerIds: number[];
}

export interface UpdateCustomerAppOrganizationRequest {
  name?: string;
  active?: boolean;
  customerIds?: number[];
}

export interface CreateCustomerAppCredentialRequest {
  username: string;
  password?: string;
  defaultLanguage: AppCredentialLanguage;
  organizationId?: number | null;
  branchIds?: number[];
  customerId?: number | null;
}

export interface UpdateCustomerAppCredentialRequest
  extends Partial<CreateCustomerAppCredentialRequest> {
  active?: boolean;
}

export interface CustomerAppLoginRequest {
  username: string;
  password: string;
  ownerUserId?: number | null;
}

export interface CustomerAppLoginAddress {
  addressId: number;
  addressLineOne?: string;
  addressLineOneUrdu?: string;
  addressLineTwo?: string;
  area?: string;
  areaUrdu?: string;
  city?: string;
  country?: string;
  lat?: number | null;
  lng?: number | null;
}

export interface CustomerAppLoginBranch extends CustomerAppBranch {
  customerName: string;
  customerNameUrdu?: string;
  address?: CustomerAppLoginAddress | null;
}

export interface CustomerAppLoginResponse {
  status: string;
  message: string;
  accessToken: string;
  data: {
    credential: {
      credentialId: number;
      username: string;
      defaultLanguage: AppCredentialLanguage;
      organizationId: number | null;
      branchIds: number[];
      active: boolean;
      lastLoginAt?: string | null;
    };
    organization: CustomerAppOrganization | null;
    branches: CustomerAppLoginBranch[];
  };
}

export interface CustomerAppMutationResponse<T> {
  status: string;
  data: T;
  message: string;
}
