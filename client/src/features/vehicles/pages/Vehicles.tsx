import DashboardLayout from "../../../layouts/DashboardLayout";

import PageHeader from "../../../components/common/PageHeader";
import SectionCard from "../../../components/common/SectionCard";

import VehicleTable from "../components/VehicleTable";

export default function Vehicles() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <PageHeader
          title="Vehicles"
          subtitle="Manage all customer vehicles in your workshop."
        />

        <SectionCard>
          <VehicleTable />
        </SectionCard>
      </div>
    </DashboardLayout>
  );
}