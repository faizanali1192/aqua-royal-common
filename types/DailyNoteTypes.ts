export type DailyNoteSectionKind = "note" | "expense" | "divider";

export interface DailyNoteSection {
  id: string;
  titleKey: string;
  kind: DailyNoteSectionKind;
  content: string;
}

export interface DailyNoteRecord {
  noteId: number;
  ownerUserId?: number;
  noteDate: string;
  sections: DailyNoteSection[];
  noteText: string;
  characterCount: number;
  labels: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface DailyNoteExpenseSummary {
  expenseId: number;
  expenseDesc: string;
  expenseAmount: number;
  expenseCategory: string;
  expenseDate: string;
}

export interface DailyNoteDaySummary {
  savedNoteCount: number;
  expenseCount: number;
  expenseTotal: number;
}

export interface DailyNoteDayResponse {
  status: string;
  data: DailyNoteRecord | null;
  expenses: DailyNoteExpenseSummary[];
  summary: DailyNoteDaySummary;
}

export interface UpsertDailyNoteRequest {
  noteDate: string;
  sections: DailyNoteSection[];
  labels: string[];
}

export interface UpsertDailyNoteResponse {
  status: string;
  data: DailyNoteRecord;
  message: string;
}
