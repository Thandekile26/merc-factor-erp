import { useMemo, useState } from "react";

import DashboardLayout from "../../../layouts/DashboardLayout";
import CustomerForm from "../components/CustomerForm";
import CustomerSearch from "../components/CustomerSearch";
import CustomerTable from "../components/CustomerTable";
import { useCustomers } from "../context/CustomerContext";
import type { Customer } from "../types";

export default function Customers() {
  const {
    customers,
    addCustomer,
    updateCustomer,
    deleteCustomer,
  } = useCustomers();

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingCustomer, setEditingCustomer] =
    useState<Customer | null>(null);

  function handleSave(customerData: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    company: string;
    address: string;
  }) {
    if (editingCustomer) {
      updateCustomer({
        ...editingCustomer,
        ...customerData,
      });

      setEditingCustomer(null);
      setShowForm(false);
      return;
    }

    addCustomer({
      id: Date.now(),
      ...customerData,
      vehicles: 0,
      balance: 0,
    });

    setShowForm(false);
  }

  function handleDelete(customer: Customer) {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${customer.firstName} ${customer.lastName}?`
    );

    if (confirmed) {
      deleteCustomer(customer.id);
    }
  }

  const filteredCustomers = useMemo(() => {
    const value = search.toLowerCase().trim();

    return customers.filter((customer) => {
      return (
        `${customer.firstName} ${customer.lastName}`
          .toLowerCase()
          .includes(value) ||
        customer.phone.toLowerCase().includes(value) ||
        customer.email.toLowerCase().includes(value) ||
        (customer.company ?? "")
          .toLowerCase()
          .includes(value)
      );
    });
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
            onClick={() => {
              setEditingCustomer(null);
              setShowForm(!showForm);
            }}
            className="rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-black hover:bg-yellow-400 transition"
          >
            {showForm ? "Close Form" : "+ Add Customer"}
          </button>
        </div>

        <CustomerSearch
          search={search}
          onSearchChange={setSearch}
        />

        {showForm && (
          <CustomerForm
            initialData={editingCustomer ?? undefined}
            onSave={handleSave}
            onCancel={() => {
              setEditingCustomer(null);
              setShowForm(false);
            }}
          />
        )}

        <CustomerTable
          customers={filteredCustomers}
          onEdit={(customer) => {
            setEditingCustomer(customer);
            setShowForm(true);
          }}
          onDelete={handleDelete}
        />
      </div>
    </DashboardLayout>
  );
}