export type SortOrderType = "asc" | "desc";

export interface Address {
  addressLineOne: string;
  addressLineOneUrdu?: string;
  addressLineTwo?: string;
  area: string;
  areaUrdu?: string;
  city: string;
  country: string;
  lat?: number | null;
  lng?: number | null;
}
export interface Dispenser {
  dispenserId?: string;
  dispenserCompanyName?: string;
  dispenserModelNumber?: string;
  dispenserDeliveryPersonName?: string;
  dispenserDeliveryDate?: string;
  dispenserReceivedByPersonName?: string;
  dispenserColor?: string;
  personWhoReceivedBackDispenserAfterContractEnd?: number;
}

interface Contacts {
  contactName: string;
  contactNumber: string;
}

export interface CreateCustomerRequest {
  customerName: string;
  customerNameUrdu?: string;
  // contactNumber: string;
  totalEmptyBottles: number;
  rate: number;
  active: boolean;
  address: Address;
  dispensers: Dispenser[];
  customerType: string;
  bottleType: string;
  billType: string;
  // mobileNumber: string;
  note: string;
  contacts: Contacts[];
}

export interface AddressModelResponse {
  addressId: number; // Assuming `addressId` is a number. Adjust type if different.
  addressLineOne: string;
  addressLineOneUrdu?: string;
  addressLineTwo?: string;
  area: string;
  areaUrdu?: string;
  city: string;
  country: string;
  lat?: number | null;
  lng?: number | null;
}

export interface CustomerModelResponse {
  customerId: number; // Assuming `customerId` is a number. Adjust type if different.
  ownerUserId?: number;
  customerName: string;
  customerNameUrdu?: string;
  // contactNumber: string;
  totalEmptyBottles: number;
  dispensers: Dispenser[];
  rate: number;
  active: boolean;
  addressId: number;
  customerType: string;
  bottleType: string;
  billType: string;
  // mobileNumber: string;
  note: string;
  contacts: Contacts[];
}

export interface CustomerListItemResponse extends CustomerModelResponse {
  address?: AddressModelResponse;
}

export interface CustomerDetailsResponse {
  status: string;
  data: CustomerListItemResponse;
}

export interface CreateCustomerResponse {
  status: string;
  data: CustomerModelResponse & { address: AddressModelResponse };
}

export interface paginationParamsType {
  page?: number;
  pageLimit?: number;
  sortDirection?: SortOrderType;
  search?: string;
  orderBy?: string;
  active?: boolean | "true" | "false";
}

export interface PaginationResponseType {
  totalItems: number;
  totalPages: number;
  currentPage: number | string;
  pageSize: number;
}

export interface CustomerSummaryResponseType {
  totalCustomers: number;
  activeCustomers: number;
  inactiveCustomers: number;
  fixedCustomers: number;
  nonFixedCustomers: number;
  pcFixedCustomers: number;
  knFixedCustomers: number;
  petFixedCustomers: number;
  pcNonFixedCustomers: number;
  knNonFixedCustomers: number;
  petNonFixedCustomers: number;
  totalEmptyBottles: number;
  totalDispensers: number;
}

export interface GetAllCustomersResponseType {
  status: string;
  data: CustomerListItemResponse[];
  pagination: PaginationResponseType;
  summary: CustomerSummaryResponseType;
}

export interface DeleteCustomerParams {
  customerId: string;
}

export interface DeleteCustomerResponse {
  status: string;
  data: string;
}

export interface CustomerDropdownParamType {
  sortDirection?: "asc" | "desc";
}

// Define the type for a customer
export interface Customer {
  customerId: string;
  customerName: string;
  customerNameUrdu?: string;
}

// Define the response structure
export interface CustomerDropdownResponseType {
  status: string;
  data: Customer[];
}
