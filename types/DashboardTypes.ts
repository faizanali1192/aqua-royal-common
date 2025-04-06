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
