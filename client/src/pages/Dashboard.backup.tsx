import DashboardLayout from "../layouts/DashboardLayout";

import {
  Car,
  ClipboardList,
  FileText,
  Wallet,
  AlertTriangle,
  Users,
} from "lucide-react";

import { useCustomers } from "../features/customers/context/CustomerContext";
import { formatCurrency } from "../lib/currency";

import PageHeader from "../components/common/PageHeader";
import SectionCard from "../components/common/SectionCard";
import StatCard from "../components/common/StatCard";

export default function Dashboard() {
  const { customers } = useCustomers();

  const totalCustomers = customers.length;

  const totalVehicles = customers.reduce(
    (total, customer) => total + customer.vehicles,
    0
  );

  const outstandingBalance = customers.reduce(
    (total, customer) => total + customer.balance,
    0
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <PageHeader
          title="Dashboard"
          subtitle="Welcome back. Here's what's happening in your workshop today."
        />

        {/* Statistics */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Customers"
            value={totalCustomers}
            icon={<Users className="h-7 w-7 text-yellow-500" />}
            subtitle="Registered customers"
          />

          <StatCard
            title="Vehicles"
            value={totalVehicles}
            icon={<Car className="h-7 w-7 text-blue-500" />}
            subtitle="Vehicles in the system"
          />

          <StatCard
            title="Outstanding Balance"
            value={formatCurrency(outstandingBalance)}
            icon={<Wallet className="h-7 w-7 text-green-500" />}
            subtitle="Customer balances"
          />

          <StatCard
            title="Open Job Cards"
            value={0}
            icon={<ClipboardList className="h-7 w-7 text-orange-500" />}
            subtitle="Coming soon"
          />
        </div>

        {/* Bottom Section */}

        <div className="grid gap-6 lg:grid-cols-2">
          <SectionCard>
            <h2 className="mb-6 text-2xl font-bold text-white">
              Recent Activity
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="text-yellow-500" />

                <span>
                  {totalCustomers} customers currently registered.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Car className="text-blue-500" />

                <span>
                  {totalVehicles} vehicles linked to customers.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Wallet className="text-green-500" />

                <span>
                  Outstanding customer balance:{" "}
                  <strong>{formatCurrency(outstandingBalance)}</strong>
                </span>
              </div>
            </div>
          </SectionCard>

          <SectionCard>
            <h2 className="mb-6 text-2xl font-bold text-white">
              Workshop Alerts
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-yellow-500" />

                <span>No critical alerts.</span>
              </div>

              <div className="flex items-center gap-3">
                <ClipboardList className="text-blue-500" />

                <span>Job Card module coming soon.</span>
              </div>

              <div className="flex items-center gap-3">
                <FileText className="text-orange-500" />

                <span>Quotes module coming soon.</span>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </DashboardLayout>
  );
}