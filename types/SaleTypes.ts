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
  saleId: string;
}

export interface SaleListParamTypes {
  startDate?: string;
  endDate?: string;
  page?: number; // Optional, defaults to "1"
  pageLimit?: number; // Optional, defaults to "10"
  sortDirection?: "asc" | "desc"; // Optional, defaults to "asc"
}
