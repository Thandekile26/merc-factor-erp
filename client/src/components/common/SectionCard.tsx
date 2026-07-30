import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SectionCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}