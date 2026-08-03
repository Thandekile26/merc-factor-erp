export type JobStatus =
  | "Booked In"
  | "Diagnosing"
  | "Waiting Parts"
  | "In Progress"
  | "Quality Check"
  | "Ready for Collection"
  | "Completed";

export type JobPriority =
  | "Low"
  | "Medium"
  | "High"
  | "Critical";

export interface JobCard {
  id: number;

  jobNumber: string;

  customerId: number;

  vehicleId: number;

  technician: string;

  complaint: string;

  diagnosis?: string;

  labourHours: number;

  priority: JobPriority;

  status: JobStatus;

  createdAt: string;

  estimatedCompletion?: string;

  completedAt?: string;

  notes?: string;
}