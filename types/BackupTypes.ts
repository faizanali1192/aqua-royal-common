export type BackupTableName =
  | "addresses"
  | "users"
  | "customers"
  | "dispensers"
  | "bottles"
  | "monthlyBills"
  | "payments"
  | "paymentLogs"
  | "expenses"
  | "dailyNotes"
  | "aiChatSessions"
  | "aiChatMessages"
  | "systemNotifications"
  | "customerFiles"
  | "customerAppOrganizations"
  | "customerAppBranches"
  | "customerAppCredentials"
  | "driverAppAccounts"
  | "driverCustomerAccesses"
  | "bottleBatches"
  | "bottleBatchRecords"
  | "sale";

export interface BackupTableSummary {
  tableName: BackupTableName;
  rows: number;
}

export interface AquaRoyalBackup {
  metadata: {
    appName: "Aqua Royal";
    backupFormatVersion: 1;
    createdAt: string;
    database: string;
    tables: BackupTableSummary[];
  };
  data: Record<BackupTableName, Record<string, unknown>[]>;
}

export interface BackupFolderConfig {
  folderExists: boolean;
  folderPath: string | null;
}

export interface BackupConfigResponse {
  status: "success";
  data: BackupFolderConfig;
}

export interface SaveBackupConfigRequest {
  folderPath: string;
}

export interface SaveBackupConfigResponse {
  status: "success";
  message: string;
  data: BackupFolderConfig;
}

export interface BackupFileInfo {
  fileName: string;
  filePath: string;
  sizeBytes: number;
  createdAt: string;
}

export interface BackupFilesResponse {
  status: "success";
  data: {
    files: BackupFileInfo[];
    folderPath: string | null;
  };
}

export interface RestoreBackupRequest {
  backup: AquaRoyalBackup;
}

export interface RestoreSavedBackupRequest {
  fileName: string;
}

export interface RestoreBackupResponse {
  status: "success";
  message: string;
  restoredAt: string;
  summary: BackupTableSummary[];
}
