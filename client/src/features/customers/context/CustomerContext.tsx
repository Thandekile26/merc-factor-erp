import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { customers as initialCustomers } from "../data";
import type { Customer } from "../types";

type CustomerContextType = {
  customers: Customer[];
  addCustomer: (customer: Customer) => void;
  updateCustomer: (customer: Customer) => void;
  deleteCustomer: (id: number) => void;
  getCustomerById: (id: number) => Customer | undefined;
};

const CustomerContext = createContext<CustomerContextType | undefined>(
  undefined
);

export function CustomerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);

  const addCustomer = (customer: Customer) => {
    setCustomers((prev) => [...prev, customer]);
  };

  const updateCustomer = (updatedCustomer: Customer) => {
    setCustomers((prev) =>
      prev.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer
      )
    );
  };

  const deleteCustomer = (id: number) => {
    setCustomers((prev) =>
      prev.filter((customer) => customer.id !== id)
    );
  };

  const getCustomerById = (id: number) => {
    return customers.find((customer) => customer.id === id);
  };

  const value = useMemo(
    () => ({
      customers,
      addCustomer,
      updateCustomer,
      deleteCustomer,
      getCustomerById,
    }),
    [customers]
  );

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomers() {
  const context = useContext(CustomerContext);

  if (!context) {
    throw new Error(
      "useCustomers must be used within a CustomerProvider."
    );
  }

  return context;
}