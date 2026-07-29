import {
  Bell,
  Search,
  CalendarDays,
  Building2,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function Topbar() {
  const today = new Date().toLocaleDateString("en-ZA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="h-20 border-b border-yellow-600/20 bg-[#111111] px-8 flex items-center justify-between">

      {/* Left Side */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Good Morning 👋
        </h1>

        <p className="text-sm text-zinc-400">
          Welcome back to Merc Factor ERP
        </p>
      </div>

      {/* Center */}
      <div className="hidden lg:flex relative w-105">

        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <Input
          placeholder="Search customers, vehicles, invoices..."
          className="pl-10 bg-zinc-900 border-zinc-700 text-white"
        />

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        <div className="hidden xl:flex items-center gap-2 text-zinc-400">
          <CalendarDays size={18} />
          <span className="text-sm">{today}</span>
        </div>

        <div className="hidden xl:flex items-center gap-2 text-zinc-400">
          <Building2 size={18} />
          <span className="text-sm">
            Johannesburg Branch
          </span>
        </div>

        <button className="relative rounded-full bg-zinc-900 p-2 hover:bg-zinc-800 transition">

          <Bell size={20} className="text-yellow-500" />

          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />

        </button>

        <Avatar className="h-10 w-10 border border-yellow-500">
          <AvatarFallback className="bg-yellow-500 text-black font-bold">
            TM
          </AvatarFallback>
        </Avatar>

      </div>

    </header>
  );
}