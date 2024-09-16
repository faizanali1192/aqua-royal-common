import { paginationParamsType, PaginationResponseType } from "./CustomerTypes";

export interface BottlesPaginationParamType
  extends Omit<paginationParamsType, "search" | "orderBy"> {}

export interface BottleListParamTypes extends BottlesPaginationParamType {
  startDate: string;
  endDate: string;
}
export interface BottlesModelResponseType {
  bottleId: number;
  customerId: number;
  deliveredBottlesQuantity: number;
  receivedBottlesQuantity: number;
  deliveryDate: string;
  verifiedByCustomer: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GetAllBottlesResponseType {
  status: string;
  data: BottlesModelResponseType[];
  pagination: BottlesPaginationParamType;
}

export interface BottleRequestTypes
  extends Pick<
    BottlesModelResponseType,
    | "deliveredBottlesQuantity"
    | "receivedBottlesQuantity"
    | "deliveryDate"
    | "verifiedByCustomer"
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
