import { type Customer } from "./types";

export const customers: Customer[] = [
  {
    id: 1,
    firstName: "Sipho",
    lastName: "Dlamini",
    phone: "082 555 1234",
    email: "sipho@email.com",
    vehicles: 2,
    balance: 850,
    company: "Dlamini Transport",
    address: "Johannesburg",
  },
  {
    id: 2,
    firstName: "Sarah",
    lastName: "Mokoena",
    phone: "071 456 7890",
    email: "sarah@email.com",
    vehicles: 1,
    balance: 0,
    company: "SM Projects",
    address: "Soweto",
  },
  {
    id: 3,
    firstName: "David",
    lastName: "Naidoo",
    phone: "083 111 2222",
    email: "david@email.com",
    vehicles: 4,
    balance: 2450,
    company: "Naidoo Logistics",
    address: "Sandton",
  },
];