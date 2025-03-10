import { PaginationResponseType } from "./CustomerTypes";

export interface CreateExpenseRequest {
  expenseDesc: string;
  expenseAmount: number;
  expenseCategory: string;
  expenseDate: string; // ISO Date String
}

interface expenseResponse extends CreateExpenseRequest {
  expenseId: number;
}

export interface CreateExpenseResponse {
  status: string;
  data?: expenseResponse;
  message?: string;
}

export interface UpdateExpenseRequest extends CreateExpenseRequest {
  expenseId: string;
}

export interface UpdateExpenseResponse {
  status: string;
  data?: expenseResponse;
  message?: string;
}

export interface DeleteExpenseParamType {
  expenseId: string;
}

export interface DeleteExpenseResponse {
  status: string;
  message: string;
}

export interface GetExpensesResponseType {
  status: string;
  data: expenseResponse[];
  totalExpenseAmount: number;
  pagination: PaginationResponseType;
}

export interface ExpenseListParamTypes {
  category?: string;
  startDate?: string;
  endDate?: string;
  page?: number; // Optional, defaults to "1"
  pageLimit?: number; // Optional, defaults to "10"
  sortDirection?: "asc" | "desc"; // Optional, defaults to "asc"
}
