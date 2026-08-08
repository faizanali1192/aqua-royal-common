export type LegalDocumentCategory =
  | "billAuthority"
  | "driverAuthority"
  | "staffAuthority"
  | "dispenserHandover"
  | "joiningLetter"
  | "waterTestReport"
  | "supplyAgreement"
  | "bottleCustody"
  | "recoveryNotice"
  | "experienceLetter"
  | "letterhead";

export type WaterQualityRating = "poor" | "bad" | "good" | "excellent";

export interface LegalDocumentItemType {
  legalDocumentId: number;
  documentType: LegalDocumentCategory;
  referenceNumber: string;
  title: string;
  recipientName?: string | null;
  recipientCnic?: string | null;
  recipientPhone?: string | null;
  recipientAddress?: string | null;
  recipientDesignation?: string | null;
  vehicleNumber?: string | null;
  assignedArea?: string | null;
  issueDate: string;
  expiryDate?: string | null;
  subject?: string | null;
  salaryOrDeposit?: string | null;
  equipmentOrBottleCount?: string | null;
  phValue?: string | null;
  tdsValue?: string | null;
  waterRating?: WaterQualityRating | null;
  content?: string | null;
  metadataPayload?: string | null;
  ownerUserId?: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateLegalDocumentRequest {
  documentType: LegalDocumentCategory;
  referenceNumber?: string;
  title?: string;
  recipientName?: string;
  recipientCnic?: string;
  recipientPhone?: string;
  recipientAddress?: string;
  recipientDesignation?: string;
  vehicleNumber?: string;
  assignedArea?: string;
  issueDate: string;
  expiryDate?: string;
  subject?: string;
  salaryOrDeposit?: string;
  equipmentOrBottleCount?: string;
  phValue?: string;
  tdsValue?: string;
  waterRating?: WaterQualityRating;
  content?: string;
  metadataPayload?: string;
}

export interface UpdateLegalDocumentRequest extends Partial<CreateLegalDocumentRequest> {
  legalDocumentId: number;
}
