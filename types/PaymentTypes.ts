import { PaginationResponseType } from "./CustomerTypes";
export type billStatusType = "paid" | "partiallyPaid" | "notPaid";

export interface AddPaymentBody {
  paymentReceivedDate: string;
  receivedAmount: number;
  receivedBy: string;
}

export interface AddPaymentParams {
  billId: string;
}

export interface PaymentData {
  billId: string;
  paymentReceivedDate: string;
  receivedAmount: number;
  receivedBy: string;
}

export interface UpdatedBillData {
  totalPayment: number;
  remainingPayment: number;
  billStatus: billStatusType;
}

export interface AddPaymentResponse {
  status: string;
  data: {
    payment: PaymentData;
    updatedBill: UpdatedBillData;
  };
}

export interface UpdatePaymentBody {
  paymentReceivedDate: string;
  receivedAmount: number;
  receivedBy: string;
}

export interface UpdatePaymentParams {
  paymentId: string;
}

export interface UpdatedPaymentData {
  paymentId: string;
  paymentReceivedDate: string;
  receivedAmount: number;
  receivedBy: string;
  billId: string;
}

export interface UpdatePaymentResponse {
  status: string;
  data: {
    payment: UpdatedPaymentData;
    updatedBill: UpdatedBillData;
  };
}

export interface GetPaymentsListQuery {
  billId?: string;
  startDate: string;
  endDate: string;
  page?: number; // Optional, defaults to "1"
  pageLimit?: number; // Optional, defaults to "10"
  sortDirection?: "asc" | "desc"; // Optional, defaults to "asc"
}

export interface PaymentDataType {
  paymentId: string;
  billId: string;
  paymentReceivedDate: string;
  receivedAmount: number;
  receivedBy: string;
}

export interface GetPaymentsListResponse {
  status: string;
  data: PaymentDataType[];
  pagination: PaginationResponseType;
}

export interface DeleteReceivedPaymentParams {
  paymentId: string; // Payment ID provided as a URL parameter
}

export interface DeleteReceivedPaymentResponse {
  status: string;
  data: {
    message: string;
    updatedBill: UpdatedBillData;
  };
}
