import { DriverAppAccount } from "./DriverTypes";

export type BottleBatchBottleType = "pc" | "kn" | "pet";
export type BottleBatchStatus =
  | "assigned"
  | "active"
  | "submitted"
  | "confirmed"
  | "cancelled";

export interface BottleBatchRecordCustomer {
  customerId: number;
  customerName: string;
  customerNameUrdu?: string;
  address?: {
    addressLineOne?: string;
    area?: string;
    city?: string;
  } | null;
}

export interface BottleBatchRecord {
  recordId: number;
  ownerUserId?: number;
  batchId: number;
  customerId: number;
  deliveredBottlesQuantity: number;
  receivedBottlesQuantity: number;
  receivedPersonName: string;
  deliveryDate: string;
  notes: string;
  bottleId: number | null;
  createdAt?: string;
  updatedAt?: string;
  customer?: BottleBatchRecordCustomer | null;
}

export interface BottleBatch {
  batchId: number;
  ownerUserId?: number;
  batchCode: string;
  batchDate: string;
  batchName: string;
  bottleType: BottleBatchBottleType;
  totalBottles: number;
  assignedDriverId: number;
  status: BottleBatchStatus;
  notes: string;
  startedAt: string | null;
  submittedAt: string | null;
  confirmedAt: string | null;
  confirmedByUserId: number | null;
  createdAt?: string;
  updatedAt?: string;
  deliveredBottles: number;
  receivedBottles: number;
  remainingBottles: number;
  recordsCount: number;
  assignedDriver?: DriverAppAccount | null;
  records?: BottleBatchRecord[];
}

export interface BottleBatchSummary {
  totalBatches: number;
  activeBatches: number;
  submittedBatches: number;
  confirmedBatches: number;
  totalBottles: number;
  deliveredBottles: number;
  remainingBottles: number;
}

export interface BottleBatchListResponse {
  status: string;
  data: BottleBatch[];
  drivers: DriverAppAccount[];
  summary: BottleBatchSummary;
}

export interface CreateBottleBatchRequest {
  batchName: string;
  batchDate?: string;
  bottleType: BottleBatchBottleType;
  totalBottles: number;
  assignedDriverId: number;
  notes?: string;
}

export interface UpdateBottleBatchRequest
  extends Partial<CreateBottleBatchRequest> {
  status?: BottleBatchStatus;
}

export interface CreateBottleBatchRecordRequest {
  customerId: number;
  deliveredBottlesQuantity: number;
  receivedBottlesQuantity: number;
  receivedPersonName?: string;
  deliveryDate: string;
  notes?: string;
}

export interface UpdateBottleBatchRecordRequest
  extends Partial<CreateBottleBatchRecordRequest> {}

export interface BottleBatchMutationResponse<T> {
  status: string;
  data: T;
  message: string;
}

export interface DriverBatchListResponse {
  status: string;
  data: BottleBatch[];
}
