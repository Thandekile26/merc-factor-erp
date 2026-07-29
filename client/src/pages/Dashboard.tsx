import DashboardLayout from "../layouts/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-5xl font-bold">Dashboard</h1>

        <p className="mt-2 text-zinc-400">
          Welcome back. Here's what's happening in your workshop today.
        </p>

        {/* We'll move your KPI cards back here next */}
      </div>
    </DashboardLayout>
  );
}