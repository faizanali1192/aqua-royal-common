import { paginationParamsType, PaginationResponseType } from "./CustomerTypes";

export interface BottlesPaginationParamType
  extends Omit<paginationParamsType, "search" | "orderBy"> {}

export interface BottleListParamTypes extends BottlesPaginationParamType {
  customerId: number;
  startDate: string;
  endDate: string;
}
export interface BottlesModelResponseType {
  bottleId: number;
  customerId: number;
  ownerUserId?: number;
  deliveredBottlesQuantity: number;
  receivedEmptyBottlesQuantity: number;
  receivedBottlesQuantity: number;
  deliveryDate: string;
  receivedPersonName?: string;
  verifiedByCustomer: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GetAllBottlesResponseType {
  status: string;
  data: BottlesModelResponseType[];
  totalDeliveredBottles: number;
  summary: BottleSummaryResponseType;
  pagination: PaginationResponseType;
}

export interface BottleSummaryResponseType {
  totalRecords: number;
  totalDeliveredBottles: number;
  totalReceivedBottles: number;
  latestEmptyBottles: number;
  verifiedRecords: number;
  notVerifiedRecords: number;
}

export interface BottleRequestTypes
  extends Pick<
    BottlesModelResponseType,
    | "deliveredBottlesQuantity"
    | "receivedBottlesQuantity"
    | "deliveryDate"
    | "verifiedByCustomer"
    | "customerId"
    | "bottleId"
    | "receivedPersonName"
    | "receivedEmptyBottlesQuantity"
  > {}

export interface BottleResponseType {
  status: string;
  data: BottlesModelResponseType;
}
export interface AddBottleParamType {
  customerId: string;
}

export interface UpdateBottleParamType extends AddBottleParamType {
  bottleId: string;
}

export interface DeleteBottleParamType extends UpdateBottleParamType {}

export interface DeleteBottleResponseType
  extends Omit<BottleResponseType, "data"> {
  data: string;
}
