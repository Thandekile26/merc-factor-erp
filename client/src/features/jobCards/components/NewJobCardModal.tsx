import { useMemo, useState } from "react";

import { useCustomers } from "../../customers/context/CustomerContext";
import { useVehicles } from "../../vehicles/context/VehicleContext";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function NewJobCardModal({
  open,
  onClose,
}: Props) {
  const { customers } = useCustomers();
  const { vehicles } = useVehicles();

  const [customerId, setCustomerId] = useState("");
  const [vehicleId, setVehicleId] = useState("");
  const [technician, setTechnician] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [complaint, setComplaint] = useState("");

  const customerVehicles = useMemo(() => {
    if (!customerId) return [];

    return vehicles.filter(
      (vehicle) => vehicle.customerId === Number(customerId)
    );
  }, [vehicles, customerId]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <div className="w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-white">
          New Job Card
        </h2>

        <p className="mt-2 mb-8 text-zinc-400">
          Register a new repair or service.
        </p>

        <div className="space-y-6">

          {/* Customer */}

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Customer
            </label>

            <select
              value={customerId}
              onChange={(e) => {
                setCustomerId(e.target.value);
                setVehicleId("");
              }}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-500"
            >
              <option value="">
                Select customer
              </option>

              {customers.map((customer) => (
                <option
                  key={customer.id}
                  value={customer.id}
                >
                  {customer.firstName} {customer.lastName}
                </option>
              ))}
            </select>
          </div>

          {/* Vehicle */}

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Vehicle
            </label>

            <select
              value={vehicleId}
              onChange={(e) => setVehicleId(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-500"
            >
              <option value="">
                Select vehicle
              </option>

              {customerVehicles.map((vehicle) => (
                <option
                  key={vehicle.id}
                  value={vehicle.id}
                >
                  {vehicle.registration} • {vehicle.make} {vehicle.model}
                </option>
              ))}
            </select>
          </div>

          {/* Complaint */}

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Customer Complaint
            </label>

            <textarea
              rows={5}
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-500"
              placeholder="Describe the customer's complaint..."
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {/* Technician */}

            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                Technician
              </label>

              <select
                value={technician}
                onChange={(e) => setTechnician(e.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-500"
              >
                <option value="">
                  Select technician
                </option>

                <option value="John">
                  John
                </option>

                <option value="Peter">
                  Peter
                </option>
              </select>
            </div>

            {/* Priority */}

            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                Priority
              </label>

              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-500"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Urgent</option>
              </select>
            </div>

          </div>

          <div className="flex justify-end gap-4 pt-4">

            <button
              onClick={onClose}
              className="rounded-xl border border-zinc-700 px-6 py-3 text-white transition hover:bg-zinc-800"
            >
              Cancel
            </button>

            <button
              className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
            >
              Create Job Card
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}