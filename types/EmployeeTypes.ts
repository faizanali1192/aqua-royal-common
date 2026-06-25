export const EMPLOYEE_ROLES = [
  "admin",
  "manager",
  "staff",
  "driver",
  "accountant",
] as const;

export const EMPLOYEE_STATUSES = ["active", "inactive"] as const;
export const EMPLOYEE_SALARY_TYPES = ["monthly", "daily"] as const;
export const ATTENDANCE_STATUSES = [
  "present",
  "absent",
  "halfDay",
  "late",
  "paidLeave",
  "unpaidLeave",
] as const;
export const SALARY_STATUSES = ["pending", "paid", "partiallyPaid"] as const;
export const SALARY_PAYMENT_MODES = [
  "cash",
  "bankTransfer",
  "cheque",
  "online",
] as const;

export type EmployeeRole = (typeof EMPLOYEE_ROLES)[number];
export type EmployeeStatus = (typeof EMPLOYEE_STATUSES)[number];
export type EmployeeSalaryType = (typeof EMPLOYEE_SALARY_TYPES)[number];
export type EmployeeAttendanceStatus = (typeof ATTENDANCE_STATUSES)[number];
export type EmployeeSalaryStatus = (typeof SALARY_STATUSES)[number];
export type EmployeeSalaryPaymentMode = (typeof SALARY_PAYMENT_MODES)[number];

export interface EmployeeBranch {
  branchId: number;
  name: string;
  location?: string | null;
  isDefault: boolean;
  ownerUserId?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface EmployeeRecord {
  employeeId: number;
  employeeDisplayId: string;
  name: string;
  email: string;
  displayEmail: string;
  phone: string;
  role: EmployeeRole;
  branchId: number;
  branch?: EmployeeBranch | null;
  joiningDate: string;
  baseSalary: number;
  salaryType: EmployeeSalaryType;
  workingDaysPerMonth: number;
  status: EmployeeStatus;
  ownerUserId?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface EmployeeAttendanceRecord {
  attendanceId: number;
  employeeId: number;
  date: string;
  status: EmployeeAttendanceStatus;
  checkIn?: string | null;
  checkOut?: string | null;
  remarks?: string | null;
  isLocked: boolean;
  ownerUserId?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface EmployeeAttendanceDayRow {
  employee: EmployeeRecord;
  attendance: EmployeeAttendanceRecord | null;
}

export interface EmployeeSalaryRecord {
  salaryId?: number;
  employeeId: number;
  month: string;
  baseSalary: number;
  salaryType: EmployeeSalaryType;
  workingDays: number;
  perDaySalary: number;
  presentDays: number;
  absentDays: number;
  halfDays: number;
  lateDays: number;
  paidLeaveDays: number;
  unpaidLeaveDays: number;
  deductions: number;
  grossSalary: number;
  netSalary: number;
  paidAmount: number;
  netPayable: number;
  status: EmployeeSalaryStatus;
  paidAt?: string | null;
  paymentMode?: EmployeeSalaryPaymentMode | null;
  remarks?: string | null;
  signature?: string | null;
  isProjected: boolean;
  employee: EmployeeRecord;
  ownerUserId?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface EmployeeHubSummary {
  totalEmployees: number;
  activeEmployees: number;
  inactiveEmployees: number;
}

export interface EmployeeAttendanceSummary {
  present: number;
  absent: number;
  halfDay: number;
  late: number;
  paidLeave: number;
  unpaidLeave: number;
  onLeave: number;
  notMarked: number;
}

export interface EmployeeSalarySummary {
  totalEmployees: number;
  grossSalary: number;
  totalDeductions: number;
  totalNetSalary: number;
  totalPaid: number;
  pendingPayment: number;
}

export interface EmployeePagination {
  currentPage: number;
  pageLimit: number;
  totalPages: number;
  totalRecords: number;
}

export interface EmployeeHubResponse {
  status: string;
  data: EmployeeRecord[];
  branches: EmployeeBranch[];
  summary: EmployeeHubSummary;
  pagination: EmployeePagination;
}

export interface EmployeeMutationResponse {
  status: string;
  message: string;
  data: EmployeeRecord;
}

export interface EmployeeBranchMutationResponse {
  status: string;
  message: string;
  data: EmployeeBranch;
}

export interface EmployeeDeleteResponse {
  status: string;
  message: string;
}

export interface EmployeeAttendanceDayResponse {
  status: string;
  date: string;
  rows: EmployeeAttendanceDayRow[];
  summary: EmployeeAttendanceSummary;
}

export interface EmployeeAttendanceMutationResponse {
  status: string;
  message: string;
  data: EmployeeAttendanceRecord;
}

export interface EmployeeSalaryMonthResponse {
  status: string;
  month: string;
  rows: EmployeeSalaryRecord[];
  summary: EmployeeSalarySummary;
}

export interface EmployeeSalaryPaymentResponse {
  status: string;
  message: string;
  data: EmployeeSalaryRecord;
}

export interface EmployeeHubParams {
  page?: number;
  pageLimit?: number;
  search?: string;
  status?: EmployeeStatus | "all";
}

export interface CreateEmployeeRequest {
  name: string;
  email?: string | null;
  phone: string;
  role: EmployeeRole;
  branchId: number;
  joiningDate: string;
  baseSalary: number;
  salaryType: EmployeeSalaryType;
  workingDaysPerMonth: number;
  status: EmployeeStatus;
}

export type UpdateEmployeeRequest = Partial<CreateEmployeeRequest>;

export interface CreateEmployeeBranchRequest {
  name: string;
  location?: string | null;
}

export interface UpsertEmployeeAttendanceRequest {
  employeeId: number;
  date: string;
  status: EmployeeAttendanceStatus;
  checkIn?: string | null;
  checkOut?: string | null;
  remarks?: string | null;
}

export interface PayEmployeeSalaryRequest {
  employeeId: number;
  month: string;
  amount: number;
  paymentMode: EmployeeSalaryPaymentMode;
  paidAt: string;
  remarks?: string | null;
  signature: string;
}
