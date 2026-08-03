import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { vehicles as initialVehicles } from "../data";
import type { Vehicle } from "../types";

type VehicleContextType = {
  vehicles: Vehicle[];
  addVehicle: (vehicle: Vehicle) => void;
  updateVehicle: (vehicle: Vehicle) => void;
  deleteVehicle: (id: number) => void;
};

const VehicleContext = createContext<VehicleContextType | undefined>(
  undefined
);

type VehicleProviderProps = {
  children: ReactNode;
};

export function VehicleProvider({
  children,
}: VehicleProviderProps) {
  const [vehicles, setVehicles] =
    useState<Vehicle[]>(initialVehicles);

  function addVehicle(vehicle: Vehicle) {
    setVehicles((prev) => [...prev, vehicle]);
  }

  function updateVehicle(updatedVehicle: Vehicle) {
    setVehicles((prev) =>
      prev.map((vehicle) =>
        vehicle.id === updatedVehicle.id
          ? updatedVehicle
          : vehicle
      )
    );
  }

  function deleteVehicle(id: number) {
    setVehicles((prev) =>
      prev.filter((vehicle) => vehicle.id !== id)
    );
  }

  const value = useMemo(
    () => ({
      vehicles,
      addVehicle,
      updateVehicle,
      deleteVehicle,
    }),
    [vehicles]
  );

  return (
    <VehicleContext.Provider value={value}>
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicles() {
  const context = useContext(VehicleContext);

  if (!context) {
    throw new Error(
      "useVehicles must be used inside VehicleProvider."
    );
  }

  return context;
}