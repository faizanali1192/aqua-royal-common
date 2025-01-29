import { paginationParamsType, PaginationResponseType } from "./CustomerTypes";

export type billStatus = "paid" | "partiallyPaid" | "notPaid";

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
  totalDeliveredBottles: number;
  data: BillResponseType[];
  pagination: PaginationResponseType;
}

export interface GetBillsByDateRangeQueryParams {
  startDate: string;
  endDate: string;
  page?: number;
  pageLimit?: number;
  sortDirection?: "asc" | "desc";
  customerId?: string; // Optional
  searchByBillId?: number;
  billStatus?: billStatus;
}

// Define the response data type
export interface Bill {
  billId: string;
  customerId: string;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  lastMonthRemainingAmount: number;
  billStatus: billStatus;
  billStartDate: string;
  billEndDate: string;
  totalBottles: number;
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
  customerIds: number[];
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

export interface BillsPdfReportQuery {
  startDate: string;
  endDate: string;
  sortDirection?: "asc" | "desc"; // Optional, default is "asc"
  customerId?: string; // Optional filter parameter
  billStatus?: "paid" | "unpaid" | "partiallyPaid"; // Optional filter parameter
}
