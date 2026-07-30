import SectionCard from "../common/SectionCard";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  FileText,
} from "lucide-react";

const notifications = [
  {
    title: "Invoice INV-1005 is overdue",
    type: "danger",
    icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
  },
  {
    title: "Mercedes C200 ready for collection",
    type: "success",
    icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
  },
  {
    title: "Brake pads stock running low",
    type: "warning",
    icon: <Clock3 className="h-5 w-5 text-yellow-500" />,
  },
  {
    title: "Quote Q-102 awaiting approval",
    type: "info",
    icon: <FileText className="h-5 w-5 text-blue-500" />,
  },
];

export default function Notifications() {
  return (
    <SectionCard>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Notifications
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Recent workshop updates
        </p>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.title}
            className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition hover:border-yellow-500/40"
          >
            <div className="rounded-xl bg-zinc-800 p-3">
              {notification.icon}
            </div>

            <span className="text-sm text-white">
              {notification.title}
            </span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}