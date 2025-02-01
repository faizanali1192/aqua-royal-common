import { paginationParamsType, PaginationResponseType } from "./CustomerTypes";

export type PaymentEventType =
  | "PAYMENT_RECEIVED"
  | "PAYMENT_UPDATED"
  | "PAYMENT_DELETED";

export interface CreatePaymentLogParams {
  billId: number;
  eventType: PaymentEventType;
  customerId: number;
  paymentAmount: number;
}

export interface GetPaymentLogsParams
  extends Omit<paginationParamsType, "search" | "orderBy"> {
  customerId?: number;
  startDate?: string;
  endDate?: string;
}

export interface PaymentLog {
  paymentLogId: number;
  billId: number;
  billStartDate: string;
  billEndDate: string;
  customerId: number;
  customerName: string;
  eventType: PaymentEventType;
  performedAt: string;
}

export interface GetPaymentLogsResponse {
  status: "success";
  data: PaymentLog[];
  pagination: PaginationResponseType;
}
