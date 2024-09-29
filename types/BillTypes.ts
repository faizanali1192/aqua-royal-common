import { paginationParamsType, PaginationResponseType } from "./CustomerTypes";

// Define a type for the route parameters
export interface GenerateBillParamPropsType {
  customerId: string;
}

// Define a type for the query parameters
export interface GenerateBillQueryParamPropsType {
  startDate: string;
  endDate: string;
}

interface BillResponseType {
  status: string;
  data: {
    customerId: string;
    totalAmount: number;
    paidAmount: number;
    remainingAmount: number;
    billStatus: string;
    billStartDate: string;
    billEndDate: string;
    totalBottles: number;
    rate: number;
  };
}

export interface GenerateBillResponseType {
  status: string;
  data: BillResponseType[];
}

export interface GetBillsByDateRangeQueryParams {
  startDate: string;
  endDate: string;
  page?: number;
  pageLimit?: number;
  sortDirection?: "asc" | "desc";
  customerId?: string; // Optional
}

// Define the response data type
export interface Bill {
  billId: string;
  customerId: string;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  billStatus: "paid" | "partiallyPaid" | "notPaid";
  billStartDate: string;
  billEndDate: string;
  createdAt: string;
  updatedAt: string;
}

// Define the response type
export interface GetBillsByDateRangeResponseType {
  status: string;
  data: Bill[]; // Array of bills
  pagination: PaginationResponseType;
}

export interface GetBillByIdParams {
  billId: string;
}

export interface GetBillByIdResponse {
  status: string;
  data: Bill | null;
}

export interface DeleteBillParams {
  billId: string;
}

export interface DeleteBillResponse {
  status: string;
  message: string;
}

export interface GenerateBulkBillsBody {
  customerIds: string[];
}

export interface GenerateBulkBillsQuery {
  startDate: string;
  endDate: string;
}

export interface CreatedBill {
  customerId: string;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  billStatus: string;
  billStartDate: string;
  billEndDate: string;
  totalBottles: number;
  rate: number;
}

export interface ErrorDetail {
  customerId: string;
  message: string;
}

export interface GenerateBulkBillsResponse {
  status: string;
  data: {
    createdBills: CreatedBill[];
    errors: ErrorDetail[];
  };
}
