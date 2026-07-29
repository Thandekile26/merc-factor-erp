import type { Customer } from "./types";

export const customers: Customer[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    phone: "082 555 1234",
    email: "john.smith@email.com",
    vehicles: 2,
    lastVisit: "28/07/2026",
    balance: 2850,
  },
  {
    id: 2,
    firstName: "Sarah",
    lastName: "Mokoena",
    phone: "071 456 7890",
    email: "sarah.m@email.com",
    vehicles: 1,
    lastVisit: "25/07/2026",
    balance: 0,
  },
  {
    id: 3,
    firstName: "David",
    lastName: "Naidoo",
    phone: "083 111 2222",
    email: "david.n@email.com",
    vehicles: 4,
    lastVisit: "20/07/2026",
    balance: 1450,
  },
];