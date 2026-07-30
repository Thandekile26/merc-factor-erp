import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  action?: ReactNode;
};

export default function EmptyState({
  title,
  description,
  action,
}: Props) {
  return (
    <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-900 p-10 text-center">
      <h2 className="text-2xl font-semibold text-white">
        {title}
      </h2>

      <p className="mt-3 text-zinc-400">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
}