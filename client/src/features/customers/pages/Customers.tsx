import { useMemo, useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";
import CustomerForm from "../components/CustomerForm";
import CustomerSearch from "../components/CustomerSearch";
import CustomerTable from "../components/CustomerTable";
import { customers as initialCustomers } from "../data";
import { type Customer } from "../types";

export default function Customers() {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  function handleAddCustomer(customer: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    company: string;
    address: string;
  }) {
    const newCustomer: Customer = {
      id: Date.now(),
      ...customer,
      vehicles: 0,
      balance: 0,
    };

    setCustomers((prev) => [...prev, newCustomer]);
    setShowForm(false);
  }

  const filteredCustomers = useMemo(() => {
    const value = search.toLowerCase();

    return customers.filter(
      (customer) =>
        `${customer.firstName} ${customer.lastName}`
          .toLowerCase()
          .includes(value) ||
        customer.phone.toLowerCase().includes(value) ||
        customer.email.toLowerCase().includes(value)
    );
  }, [customers, search]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Customers
            </h1>

            <p className="text-zinc-400">
              Manage all workshop customers.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-black hover:bg-yellow-400"
          >
            {showForm ? "Close Form" : "+ Add Customer"}
          </button>
        </div>

        <CustomerSearch
          search={search}
          onSearchChange={setSearch}
        />

        {showForm && (
          <CustomerForm onSave={handleAddCustomer} />
        )}

        <CustomerTable customers={filteredCustomers} />
      </div>
    </DashboardLayout>
  );
}