import { Users, Car, ClipboardList, Wallet } from "lucide-react";

import { useCustomers } from "../../../features/customers/context/CustomerContext";
import { formatCurrency } from "../../../lib/currency";

import StatCard from "../StatCard";

export default function DashboardStats() {
  const { customers } = useCustomers();

  const totalCustomers = customers.length;

  const totalVehicles = customers.reduce(
    (sum, customer) => sum + customer.vehicles,
    0
  );

  const outstandingBalance = customers.reduce(
    (sum, customer) => sum + customer.balance,
    0
  );

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Customers"
        value={totalCustomers}
        icon={<Users className="h-7 w-7 text-yellow-500" />}
        subtitle="Registered Customers"
      />

      <StatCard
        title="Vehicles"
        value={totalVehicles}
        icon={<Car className="h-7 w-7 text-blue-500" />}
        subtitle="Vehicles in System"
      />

      <StatCard
        title="Open Job Cards"
        value={0}
        icon={<ClipboardList className="h-7 w-7 text-orange-500" />}
        subtitle="Awaiting Service"
      />

      <StatCard
        title="Outstanding Balance"
        value={formatCurrency(outstandingBalance)}
        icon={<Wallet className="h-7 w-7 text-green-500" />}
        subtitle="Customer Balances"
      />
    </div>
  );
}