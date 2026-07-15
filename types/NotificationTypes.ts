export type NotificationAction = "created" | "updated" | "deleted" | "restored";

export type NotificationVariant = "error" | "info" | "success" | "warning";

export type NotificationReadFilter = "all" | "read" | "unread";

export interface SystemNotificationRecord {
  action: NotificationAction;
  createdAt: string;
  entity: string;
  message: string;
  notificationId: number;
  ownerUserId?: number;
  readAt: string | null;
  recordId?: string | null;
  title: string;
  updatedAt: string;
  variant: NotificationVariant;
}

export interface NotificationsPaginationResponse {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface NotificationsSummaryResponse {
  readCount: number;
  totalCount: number;
  unreadCount: number;
}

export interface GetNotificationsQuery {
  page?: number;
  pageLimit?: number;
  status?: NotificationReadFilter;
}

export interface GetNotificationsResponse {
  status: "success";
  data: SystemNotificationRecord[];
  pagination: NotificationsPaginationResponse;
  summary: NotificationsSummaryResponse;
}

export interface MarkAllNotificationsReadResponse {
  status: "success";
  message: string;
  updatedCount: number;
}

export interface MarkNotificationReadResponse {
  status: "success";
  data: SystemNotificationRecord;
  message: string;
}
