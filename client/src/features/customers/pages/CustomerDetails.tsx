import DashboardLayout from "../../../layouts/DashboardLayout";
import { useNavigate, useParams } from "react-router-dom";
import { formatCurrency } from "../../../lib/currency";
import { useCustomers } from "../context/CustomerContext";

export default function CustomerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getCustomerById } = useCustomers();

  const customer = getCustomerById(Number(id));

  if (!customer) {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-white">
            Customer not found
          </h1>

          <button
            onClick={() => navigate("/customers")}
            className="rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-black hover:bg-yellow-400"
          >
            Back to Customers
          </button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="rounded-2xl bg-zinc-900 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white">
                {customer.firstName} {customer.lastName}
              </h1>

              <p className="mt-2 text-zinc-400">
                {customer.company || "Private Customer"}
              </p>
            </div>

            <button
              onClick={() => navigate("/customers")}
              className="rounded-lg border border-zinc-700 px-4 py-2 hover:bg-zinc-800"
            >
              Back
            </button>
          </div>
        </div>

        {/* Information */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-zinc-900 p-6">
            <h2 className="mb-6 text-xl font-bold text-white">
              Contact Details
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-zinc-400">Phone</p>
                <p className="text-white">{customer.phone}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-400">Email</p>
                <p className="text-white">{customer.email}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-400">Address</p>
                <p className="text-white">
                  {customer.address || "No address captured"}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-zinc-900 p-6">
            <h2 className="mb-6 text-xl font-bold text-white">
              Account Summary
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-zinc-400">Vehicles</p>
                <p className="text-2xl font-bold text-white">
                  {customer.vehicles}
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-400">
                  Outstanding Balance
                </p>

                <p className="text-3xl font-bold text-yellow-500">
                  {formatCurrency(customer.balance)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicles */}
        <div className="rounded-2xl bg-zinc-900 p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Vehicles
          </h2>

          <div className="rounded-lg border border-dashed border-zinc-700 p-8 text-center">
            <p className="text-zinc-400">
              This customer has no vehicles yet.
            </p>

            <button className="mt-6 rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-black hover:bg-yellow-400">
              + Add Vehicle
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}