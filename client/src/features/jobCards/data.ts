import type { JobCard } from "./types";

export const jobCards: JobCard[] = [
  {
    id: 1,
    jobNumber: "JC-000001",

    customerId: 1,
    vehicleId: 1,

    technician: "John",

    complaint: "Engine overheating",

    diagnosis: "Cooling system pressure loss",

    labourHours: 4,

    priority: "High",

    status: "In Progress",

    createdAt: "2026-08-03",

    estimatedCompletion: "2026-08-04",

    notes: "Pressure test completed. Waiting for thermostat.",
  },

  {
    id: 2,
    jobNumber: "JC-000002",

    customerId: 2,
    vehicleId: 2,

    technician: "Peter",

    complaint: "Brake vibration",

    diagnosis: "Front brake discs worn",

    labourHours: 2,

    priority: "Medium",

    status: "Diagnosing",

    createdAt: "2026-08-03",

    estimatedCompletion: "2026-08-03",

    notes: "Measure disc thickness before replacing.",
  },
];