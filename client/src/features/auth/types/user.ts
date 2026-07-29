export type UserRole =
  | "admin"
  | "manager"
  | "receptionist"
  | "technician"
  | "apprentice"

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  role: UserRole
}