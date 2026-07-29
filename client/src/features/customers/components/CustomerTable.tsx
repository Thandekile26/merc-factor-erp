import { type Customer } from "../types";
import CustomerActions from "./CustomerActions";

type Props = {
  customers: Customer[];
};

export default function CustomerTable({ customers }: Props) {
  if (customers.length === 0) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-10 text-center text-zinc-400">
        No customers found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      <table className="w-full">
        <thead className="bg-zinc-950">
          <tr className="text-left text-yellow-500">
            <th className="p-4">Customer</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Vehicles</th>
            <th className="p-4">Balance</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-t border-zinc-800 hover:bg-zinc-800 transition"
            >
              <td className="p-4">
                <div className="font-semibold">
                  {customer.firstName} {customer.lastName}
                </div>

                <div className="text-sm text-zinc-400">
                  {customer.email}
                </div>
              </td>

              <td className="p-4">{customer.phone}</td>

              <td className="p-4">{customer.vehicles}</td>

              <td className="p-4 font-medium">
                {new Intl.NumberFormat("en-ZA", {
                  style: "currency",
                  currency: "ZAR",
                }).format(customer.balance)}
              </td>

              <td className="p-4">
                <div className="flex justify-center">
                  <CustomerActions
                    onView={() => console.log("View", customer.id)}
                    onEdit={() => console.log("Edit", customer.id)}
                    onDelete={() => console.log("Delete", customer.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}