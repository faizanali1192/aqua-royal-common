export interface Address {
  addressLineOne: string;
  addressLineTwo?: string;
  area: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
}

export interface CreateCustomerRequest {
  customerName: string;
  contactNumber: string;
  totalEmptyBottles: number;
  totalDispensers: number;
  dispenserCompanyName: string;
  dispenserModelNo: string;
  rate: number;
  active: boolean;
  address: Address;
  customerType: string;
  bottleType: string;
  billType: string;
}

interface AddressModelResponse {
  addressId: number; // Assuming `addressId` is a number. Adjust type if different.
  addressLineOne: string;
  addressLineTwo?: string;
  area: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
}

export interface CustomerModelResponse {
  customerId: number; // Assuming `customerId` is a number. Adjust type if different.
  customerName: string;
  contactNumber: string;
  totalEmptyBottles: number;
  totalDispensers: number;
  dispenserCompanyName: string;
  dispenserModelNo: string;
  rate: number;
  active: boolean;
  addressId: number;
  customerType: string;
  bottleType: string;
  billType: string;
}

export interface CreateCustomerResponse {
  status: string;
  data: CustomerModelResponse & { address: AddressModelResponse };
}

export interface paginationParamsType {
  page?: number;
  pageLimit?: number;
  sortDirection?: "asc" | "desc";
  search?: string;
  orderBy?: string;
}

export interface PaginationResponseType {
  totalItems: number;
  totalPages: number;
  currentPage: number | string;
  pageSize: number;
}

export interface GetAllCustomersResponseType {
  status: string;
  data: CreateCustomerResponse[];
  pagination: PaginationResponseType;
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
}

// Define the response structure
export interface CustomerDropdownResponseType {
  status: string;
  data: Customer[];
}
