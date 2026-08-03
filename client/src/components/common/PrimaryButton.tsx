import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400 disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}