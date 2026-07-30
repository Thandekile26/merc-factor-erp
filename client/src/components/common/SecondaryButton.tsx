import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function SecondaryButton({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`rounded-lg border border-zinc-700 px-5 py-3 text-white transition hover:bg-zinc-800 ${className}`}
    >
      {children}
    </button>
  );
}