import type { Vehicle } from "./types";

export const vehicles: Vehicle[] = [
  {
    id: 1,
    customerId: 1,

    registration: "KZN123GP",
    vin: "WDD20501234567890",

    make: "Mercedes-Benz",
    model: "C200",

    year: 2020,

    colour: "White",

    mileage: 68540,

    engineNumber: "27492012345678",

    status: "In Service",
  },

  {
    id: 2,
    customerId: 2,

    registration: "CA456WC",
    vin: "WDD21398765432100",

    make: "Mercedes-Benz",
    model: "E220 CDI",

    year: 2018,

    colour: "Silver",

    mileage: 152300,

    engineNumber: "65192499887766",

    status: "Ready",
  },
];