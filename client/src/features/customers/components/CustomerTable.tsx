import { useNavigate } from "react-router-dom";
import { type Customer } from "../types";
import CustomerActions from "./CustomerActions";
import { formatCurrency } from "../../../lib/currency";

type Props = {
  customers: Customer[];
  onEdit: (customer: Customer) => void;
  onDelete: (customer: Customer) => void;
};

export default function CustomerTable({
  customers,
  onEdit,
  onDelete,
}: Props) {
  const navigate = useNavigate();

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
              className="border-t border-zinc-800 transition hover:bg-zinc-800"
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
                {formatCurrency(customer.balance)}
              </td>

              <td className="p-4">
                <div className="flex justify-center">
                  <CustomerActions
                    onView={() =>
                      navigate(`/customers/${customer.id}`)
                    }
                    onEdit={() => onEdit(customer)}
                    onDelete={() => onDelete(customer)}
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