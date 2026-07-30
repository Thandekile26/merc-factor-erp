import SectionCard from "../common/SectionCard";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18500 },
  { month: "Mar", revenue: 15400 },
  { month: "Apr", revenue: 23600 },
  { month: "May", revenue: 27400 },
  { month: "Jun", revenue: 32100 },
];

export default function RevenueOverview() {
  return (
    <SectionCard>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Revenue Overview
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Workshop revenue over the last 6 months
          </p>
        </div>

        <div className="rounded-xl bg-yellow-500/10 px-4 py-2">
          <span className="text-sm font-semibold text-yellow-500">
            +18%
          </span>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="revenueFill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#eab308"
                  stopOpacity={0.45}
                />

                <stop
                  offset="95%"
                  stopColor="#eab308"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#3f3f46"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              stroke="#a1a1aa"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#eab308"
              strokeWidth={3}
              fill="url(#revenueFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}