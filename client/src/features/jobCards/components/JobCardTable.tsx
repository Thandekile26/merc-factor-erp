import { useCustomers } from "../../customers/context/CustomerContext";
import { useVehicles } from "../../vehicles/context/VehicleContext";
import { useJobCards } from "../context/JobCardContext";

export default function JobCardTable() {
  const { jobCards } = useJobCards();
  const { customers } = useCustomers();
  const { vehicles } = useVehicles();

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800">
      <table className="w-full">
        <thead className="bg-zinc-900">
          <tr className="text-left text-sm font-semibold text-zinc-400">
            <th className="px-5 py-4">Job Card</th>
            <th className="px-5 py-4">Customer</th>
            <th className="px-5 py-4">Vehicle</th>
            <th className="px-5 py-4">Technician</th>
            <th className="px-5 py-4">Priority</th>
            <th className="px-5 py-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {jobCards.map((jobCard) => {
            const customer = customers.find(
              (c) => c.id === jobCard.customerId
            );

            const vehicle = vehicles.find(
              (v) => v.id === jobCard.vehicleId
            );

            return (
              <tr
                key={jobCard.id}
                className="border-t border-zinc-800 transition hover:bg-zinc-900/50"
              >
                <td className="px-5 py-4 font-medium text-white">
                  {jobCard.jobNumber}
                </td>

                <td className="px-5 py-4 text-zinc-300">
                  {customer
                    ? `${customer.firstName} ${customer.lastName}`
                    : "Unknown"}
                </td>

                <td className="px-5 py-4 text-zinc-300">
                  {vehicle
                    ? `${vehicle.make} ${vehicle.model}`
                    : "Unknown"}
                </td>

                <td className="px-5 py-4 text-zinc-300">
                  {jobCard.technician}
                </td>

                <td className="px-5 py-4">
                  <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm font-medium text-orange-400">
                    {jobCard.priority}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400">
                    {jobCard.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}