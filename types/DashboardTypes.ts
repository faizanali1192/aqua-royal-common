export interface GetProfitResponseType {
  status: "success" | "error";
  data: {
    profit: number;
    homeExpenses: number;
    otherExpenses: number;
    totalCounterSaleAmount: number;
    totalBillCollectionAmount: number;
  };
}
export interface GetProfitParamTypes {
  startDate?: string;
  endDate?: string;
}

export type CustomerCylinderRequestStatus =
  | "pending"
  | "approved"
  | "delivered"
  | "cancelled";

export type CustomerCylinderRequestSource = "user" | "admin";

export interface CustomerCylinderRequestRecord {
  requestId: number;
  ownerUserId: number;
  credentialId: number | null;
  branchId: number | null;
  customerId: number | null;
  customerName: string;
  customerCode: string;
  branchName: string;
  requestDate: string;
  cylinderCount: number;
  cylinderSize: string;
  cylinderNumber: string;
  status: CustomerCylinderRequestStatus;
  requestSource: CustomerCylinderRequestSource;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerCylinderRequestSummary {
  totalRequests: number;
  pendingRequests: number;
  approvedRequests: number;
  deliveredRequests: number;
  cancelledRequests: number;
  totalCylinderCount: number;
}

export interface GetDashboardCustomerRequestsResponse {
  status: "success";
  data: CustomerCylinderRequestRecord[];
  summary: CustomerCylinderRequestSummary;
}

export interface CreateDashboardCustomerRequestRequest {
  customerId: number;
  branchId?: number | null;
  requestDate?: string;
  cylinderCount: number;
  cylinderSize?: string;
  cylinderNumber?: string;
  notes?: string;
}

export interface CreateDashboardCustomerRequestResponse {
  status: "success";
  message: string;
  data: CustomerCylinderRequestRecord;
}

export interface UpdateCustomerCylinderRequestStatusRequest {
  status: CustomerCylinderRequestStatus;
}

export interface UpdateCustomerCylinderRequestStatusResponse {
  status: "success";
  message: string;
  data: CustomerCylinderRequestRecord;
}
