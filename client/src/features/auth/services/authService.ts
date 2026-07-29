import type { User } from "../types/user"

export interface LoginRequest {
  email: string
  password: string
}

export async function login(
  credentials: LoginRequest
): Promise<User> {
  console.log("Login request:", credentials)

  // Temporary fake login.
  // Later this will call our backend API.
  return {
    id: "1",
    firstName: "Merc",
    lastName: "Admin",
    email: credentials.email,
    role: "admin",
  }
}