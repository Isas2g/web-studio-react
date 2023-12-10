export interface User {
  id?: number;
  name: string;
  surname?: string;
  username?: string;
  password?: string;
  role?: number;
  roleName?: string;
  isTeamLead?: boolean;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  disabledAt?: string;
}
