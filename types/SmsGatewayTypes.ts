export interface SmsGatewaySettings {
  gatewayMobileNumber: string;
  dailySmsLimit: number;
  smsDelaySeconds: number;
  autoSmsOnBottleDelivery: boolean;
  autoSmsOnBillCreate: boolean;
  bottleDeliverySmsTemplate: string;
  updatedAt?: string;
}

export interface SmsQueueItem {
  id: number;
  recipientPhone: string;
  messageText: string;
  recipientType: "customer" | "vendor" | "employee";
  referenceType?: string | null;
  referenceId?: number | null;
  customerId?: number | null;
  employeeId?: number | null;
  status: "PENDING" | "DISPATCHED" | "FAILED";
  retryCount: number;
  errorMessage?: string | null;
  dispatchedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PullChunkRequest {
  batchSize?: number;
  deviceId?: string;
  employeeId?: number;
}

export interface PullChunkItem {
  id: number;
  recipientPhone: string;
  message: string;
  eventType?: string;
  customerId?: number | null;
  // Backward compatibility aliases
  queueId?: number;
  phone?: string;
  phoneNumber?: string;
  body?: string;
  smsBody?: string;
  messageText?: string;
  referenceType?: string | null;
  referenceId?: number | null;
}

export type ChunkMessage = PullChunkItem;

export interface PullChunkData {
  items: PullChunkItem[];
  remainingCount: number;
  delaySeconds: number;
  dailyLimit: number;
  sentToday: number;
  // Compatibility alias
  remainingPending?: number;
}

export interface PullChunkResponse {
  status: "success";
  data: PullChunkData;
  // Compatibility aliases at root level
  count?: number;
  remainingPending?: number;
  messages?: PullChunkItem[];
}

export interface AckChunkResult {
  id?: number;
  queueId?: number;
  smsId?: number;
  status: "SENT" | "FAILED" | "sent" | "failed" | string;
  errorMessage?: string;
}

export interface AckChunkRequest {
  deviceId?: string;
  employeeId?: number;
  results: AckChunkResult[];
}

export interface AckChunkData {
  acknowledgedCount: number;
  remainingCount: number;
  sentToday: number;
}

export interface AckChunkResponse {
  status: "success";
  acknowledgedCount: number;
  remainingPending: number;
  data?: AckChunkData;
}

export interface SmsGatewayStatusData {
  pendingQueueCount: number;
  dispatchedCount: number;
  sentToday: number;
  failedToday: number;
  dailyLimit: number;
  remainingDailyQuota: number;
  quotaPercentage: number;
  delaySeconds: number;
  gatewayMobileNumber: string;
  autoSmsOnBottleDelivery: boolean;
  autoSmsOnBillCreate: boolean;
  lastDispatchedAt: string | null;
}

export interface SmsGatewayStatusResponse {
  status: "success";
  data: SmsGatewayStatusData;
}

export interface SmsDailyTrend {
  date: string;
  sent: number;
  failed: number;
  queued: number;
}

export interface SmsInsightsSummary {
  totalSentAllTime: number;
  totalSentToday: number;
  totalPendingQueue: number;
  deliveryRatePercentage: number;
  dailyTrends: SmsDailyTrend[];
}

export interface SmsInsightsResponse {
  status: "success";
  data: SmsInsightsSummary;
}

export interface UpdateSmsGatewaySettingsRequest {
  gatewayMobileNumber?: string;
  dailySmsLimit?: number;
  smsDelaySeconds?: number;
  autoSmsOnBottleDelivery?: boolean;
  autoSmsOnBillCreate?: boolean;
  bottleDeliverySmsTemplate?: string;
}

export interface SmsGatewaySettingsResponse {
  status: "success";
  data: SmsGatewaySettings;
}
