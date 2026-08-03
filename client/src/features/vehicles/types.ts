export type VehicleStatus =
  | "Ready"
  | "In Service"
  | "Waiting Parts"
  | "Completed";

export type Vehicle = {
  id: number;

  customerId: number;

  registration: string;
  vin: string;

  make: string;
  model: string;
  year: number;

  colour: string;

  mileage: number;

  engineNumber: string;

  status: VehicleStatus;
};