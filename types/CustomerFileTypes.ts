export type CustomerFileVaultId = "company" | string;

export interface CustomerFileRecord {
  fileId: number;
  ownerUserId: number;
  customerId: number | null;
  fileName: string;
  filePath: string;
  fileSize: number;
  mimeType: string;
  folder: string;
  publicId?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerFilesResponse {
  status: "success";
  data: CustomerFileRecord[];
}

export interface UploadCustomerFileRequest {
  fileName: string;
  fileData: string;
  fileSize: number;
  folder?: string;
  mimeType: string;
}

export interface UploadCustomerFileResponse {
  status: "success";
  message: string;
  data: CustomerFileRecord;
}

export interface RenameCustomerFileRequest {
  fileName: string;
}

export interface RenameCustomerFileResponse {
  status: "success";
  message: string;
  data: CustomerFileRecord;
}

export type CustomerFolderAction = "renameFolder" | "deleteFolder";

export interface UpdateCustomerFolderRequest {
  action: CustomerFolderAction;
  oldFolder: string;
  newFolder?: string;
}

export interface UpdateCustomerFolderResponse {
  status: "success";
  message: string;
  affectedCount: number;
}

export interface DeleteCustomerFileResponse {
  status: "success";
  message: string;
}
