export type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  vehicles: number;
  balance: number;
  company?: string;
  address?: string;
};