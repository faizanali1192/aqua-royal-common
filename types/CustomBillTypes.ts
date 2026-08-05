export type CustomerType = "fixed" | "nonFixed";

export interface CustomBillType {
  customBillId: number;
  title: string;
  customerId?: string | null;
  billDate: string;
  customerName?: string | null;
  contactNumber?: string | null;
  address?: string | null;
  customerType: CustomerType;
  bottles?: string | null;
  rate?: string | null;
  remainingAmount?: string | null;
  amount?: string | null;
  totalAmount?: string | null;
  ownerUserId?: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCustomBillRequest {
  title?: string;
  customerId?: string;
  billDate: string;
  customerName?: string;
  contactNumber?: string;
  address?: string;
  customerType?: CustomerType;
  bottles?: string;
  rate?: string;
  remainingAmount?: string;
  amount?: string;
  totalAmount?: string;
}

export interface UpdateCustomBillRequest {
  title?: string;
  customerId?: string;
  billDate?: string;
  customerName?: string;
  contactNumber?: string;
  address?: string;
  customerType?: CustomerType;
  bottles?: string;
  rate?: string;
  remainingAmount?: string;
  amount?: string;
  totalAmount?: string;
}

export interface CustomBillListResponse {
  status: string;
  data: CustomBillType[];
}

export interface CustomBillSingleResponse {
  status: string;
  data: CustomBillType;
}

export interface CustomBillDeleteResponse {
  status: string;
  message: string;
}
