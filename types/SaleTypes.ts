export interface CreateSaleRequest {
  saleDesc?: string;
  saleAmount: number;
  saleDate: Date | string;
}

export interface CreateSaleResponse {
  status: "success" | "error";
  data?: any;
  message?: string;
}

export interface UpdateSaleRequest {
  saleDesc?: string;
  saleAmount: number;
  saleDate: Date | string;
}

export interface UpdateSaleResponse {
  status: "success" | "error";
  data?: any;
  message?: string;
}

export interface DeleteSaleResponse {
  status: "success" | "error";
  message: string;
}

export interface GetSalesResponseType {
  status: "success" | "error";
  data: any[];
  totalSaleAmount: number;
  pagination: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
  };
}

export interface DeleteSaleParamType {
  expenseId: string;
}
