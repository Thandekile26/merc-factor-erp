import SectionCard from "../SectionCard";
import {
  Car,
  Clock3,
  CheckCircle2,
  Wrench,
} from "lucide-react";

const stats = [
  {
    title: "Vehicles In",
    value: 5,
    icon: <Car className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "In Service",
    value: 3,
    icon: <Wrench className="h-5 w-5 text-yellow-500" />,
  },
  {
    title: "Ready Collection",
    value: 1,
    icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
  },
  {
    title: "Awaiting Parts",
    value: 2,
    icon: <Clock3 className="h-5 w-5 text-orange-500" />,
  },
];

export default function TodaysWorkshop() {
  return (
    <SectionCard>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Today's Workshop
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Live overview of today's workshop activity
        </p>
      </div>

      <div className="space-y-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition hover:border-yellow-500/40"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-zinc-800 p-3">
                {item.icon}
              </div>

              <span className="font-medium text-white">
                {item.title}
              </span>
            </div>

            <span className="text-2xl font-bold text-white">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}