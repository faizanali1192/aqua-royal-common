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

export interface ChunkMessage {
  id: number;
  recipientPhone: string;
  messageText: string;
  referenceType?: string | null;
  referenceId?: number | null;
  customerId?: number | null;
}

export interface PullChunkResponse {
  status: "success";
  count: number;
  remainingPending: number;
  messages: ChunkMessage[];
}

export interface AckChunkResult {
  id: number;
  status: "SENT" | "FAILED";
  errorMessage?: string;
}

export interface AckChunkRequest {
  deviceId?: string;
  employeeId?: number;
  results: AckChunkResult[];
}

export interface AckChunkResponse {
  status: "success";
  acknowledgedCount: number;
  remainingPending: number;
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
