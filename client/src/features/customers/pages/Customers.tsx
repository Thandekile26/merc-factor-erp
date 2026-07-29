import { useState } from "react";
import CustomerForm from "../components/CustomerForm";

type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export default function Customers() {
  const [showForm, setShowForm] = useState(false);

  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: 1,
      firstName: "Sipho",
      lastName: "Dlamini",
      phone: "082 555 1234",
      email: "sipho@email.com",
    },
    {
      id: 2,
      firstName: "Sarah",
      lastName: "Mokoena",
      phone: "071 456 7890",
      email: "sarah@email.com",
    },
  ]);

  function addCustomer(customer: Omit<Customer, "id">) {
    setCustomers([
      ...customers,
      {
        id: Date.now(),
        ...customer,
      },
    ]);

    setShowForm(false);
  }

  return (
    <div className="p-8 text-white">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Customers</h1>
          <p className="text-zinc-400">
            Manage all workshop customers.
          </p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-black hover:bg-yellow-400"
        >
          + Add Customer
        </button>
      </div>

      {showForm && (
        <div className="mb-8">
          <CustomerForm onSave={addCustomer} />
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-zinc-800">
        <table className="w-full">
          <thead className="bg-zinc-900">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Email</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-t border-zinc-800 hover:bg-zinc-900"
              >
                <td className="p-4">
                  {customer.firstName} {customer.lastName}
                </td>

                <td className="p-4">{customer.phone}</td>

                <td className="p-4">{customer.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}