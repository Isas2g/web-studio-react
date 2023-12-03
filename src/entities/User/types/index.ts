export interface User {
  id?: number;
  name: string;
  surname?: string;
  role: number;
  roleName: string;
  isTeamLead?: boolean;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  disabledAt?: string;
}
