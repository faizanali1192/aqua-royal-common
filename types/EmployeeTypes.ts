import { Address } from "./CustomerTypes";
enum UserRoles {
  superAdmin,
  admin,
  driver,
  accountant,
  customer,
}

export interface CreateEmployeeRequest {
  userName: string;
  email: string;
  password: string;
  role: UserRoles; // You can restrict this to the possible role values from the `ROLES` enum
  employeeContact: string;
  employeeReferenceName?: string;
  employeeReferenceContact?: string;
  employeeCnicNumber: string;
  employeeSalaryType: string; // You can restrict this to `SalaryTypes` enum
  salary: number;
  isActive: boolean;
  employmentStartDate: string; // ISO Date string format
  employmentEndDate: string; // ISO Date string format
  address: Address;
}

export interface CreateEmployeeResponse {
  status: string;
  data: {
    employeeId: number;
    userName: string;
    email: string;
    role: string;
    employeeContact: string;
    employeeReferenceName?: string;
    employeeReferenceContact?: string;
    employeeCnicNumber: string;
    employeeSalaryType: string;
    salary: number;
    isActive: boolean;
    employmentStartDate: string;
    employmentEndDate: string;
    addressId: number;
    address: Address;
  };
  message?: any;
}
