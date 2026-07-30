import type { ReactNode } from "react";

type Props = {
  title: string;
  value: string | number;
  icon: ReactNode;
  subtitle?: string;
};

export default function StatCard({
  title,
  value,
  icon,
  subtitle,
}: Props) {
  return (
    <div className="
      group
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-900
      p-6
      shadow-lg
      transition-all
      duration-300
      hover:border-yellow-500/40
      hover:-translate-y-1
      hover:shadow-yellow-500/10
    ">
      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-zinc-400">
            {title}
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight text-white">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-3 text-sm text-green-400">
              {subtitle}
            </p>
          )}
        </div>

        <div className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-zinc-800
          transition-colors
          duration-300
          group-hover:bg-yellow-500/10
        ">
          {icon}
        </div>

      </div>
    </div>
  );
}