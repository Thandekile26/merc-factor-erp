import { useVehicles } from "../context/VehicleContext";
import { useCustomers } from "../../customers/context/CustomerContext";

export default function VehicleTable() {
  const { vehicles } = useVehicles();
  const { customers } = useCustomers();

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800">
      <table className="w-full">
        <thead className="bg-zinc-900">
          <tr className="text-left text-sm font-semibold text-zinc-400">
            <th className="px-5 py-4">Registration</th>
            <th className="px-5 py-4">Customer</th>
            <th className="px-5 py-4">Vehicle</th>
            <th className="px-5 py-4">Year</th>
            <th className="px-5 py-4">Mileage</th>
            <th className="px-5 py-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {vehicles.map((vehicle) => {
            const customer = customers.find(
              (c) => c.id === vehicle.customerId
            );

            return (
              <tr
                key={vehicle.id}
                className="border-t border-zinc-800 transition hover:bg-zinc-900/50"
              >
                <td className="px-5 py-4 font-medium text-white">
                  {vehicle.registration}
                </td>

                <td className="px-5 py-4 text-zinc-300">
                  {customer
                    ? `${customer.firstName} ${customer.lastName}`
                    : "Unknown Customer"}
                </td>

                <td className="px-5 py-4 text-zinc-300">
                  {vehicle.make} {vehicle.model}
                </td>

                <td className="px-5 py-4 text-zinc-300">
                  {vehicle.year}
                </td>

                <td className="px-5 py-4 text-zinc-300">
                  {vehicle.mileage.toLocaleString()} km
                </td>

                <td className="px-5 py-4">
                  <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-medium text-yellow-400">
                    {vehicle.status}
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