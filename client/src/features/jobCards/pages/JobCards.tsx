import { useState } from "react";

import DashboardLayout from "../../../layouts/DashboardLayout";

import PageHeader from "../../../components/common/PageHeader";
import SectionCard from "../../../components/common/SectionCard";
import PrimaryButton from "../../../components/common/PrimaryButton";

import JobCardTable from "../components/JobCardTable";
import NewJobCardModal from "../components/NewJobCardModal";

export default function JobCards() {
  const [open, setOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div className="flex items-center justify-between">
          <PageHeader
            title="Job Cards"
            subtitle="Manage all workshop repairs and services."
          />

          <PrimaryButton onClick={() => setOpen(true)}>
            + New Job Card
          </PrimaryButton>
        </div>

        <SectionCard>
          <JobCardTable />
        </SectionCard>

        <NewJobCardModal
          open={open}
          onClose={() => setOpen(false)}
        />

      </div>
    </DashboardLayout>
  );
}