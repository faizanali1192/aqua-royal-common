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

export interface UpdateExpenseRequest extends CreateExpenseRequest {}

export interface UpdateExpenseResponse {
  status: string;
  data?: expenseResponse;
  message?: string;
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
