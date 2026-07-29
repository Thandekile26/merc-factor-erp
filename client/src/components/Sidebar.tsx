import {
  LayoutDashboard,
  Users,
  Car,
  ClipboardList,
  Package,
  FileText,
  CreditCard,
  UserCog,
  BarChart3,
  Settings,
  Wrench,
  Boxes,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const sections = [
  {
    title: "MAIN",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    ],
  },
  {
    title: "WORKSHOP",
    items: [
      { name: "Customers", icon: Users, path: "/customers" },
      { name: "Vehicles", icon: Car, path: "/vehicles" },
      { name: "Job Cards", icon: ClipboardList, path: "/job-cards" },
      { name: "Inspections", icon: Wrench, path: "/inspections" },
    ],
  },
  {
    title: "SALES",
    items: [
      { name: "Quotes", icon: FileText, path: "/quotes" },
      { name: "Invoices", icon: FileText, path: "/invoices" },
      { name: "Payments", icon: CreditCard, path: "/payments" },
    ],
  },
  {
    title: "INVENTORY",
    items: [
      { name: "Parts", icon: Package, path: "/parts" },
      { name: "Suppliers", icon: Boxes, path: "/suppliers" },
    ],
  },
  {
    title: "PEOPLE",
    items: [
      { name: "Employees", icon: UserCog, path: "/employees" },
    ],
  },
  {
    title: "REPORTS",
    items: [
      { name: "Analytics", icon: BarChart3, path: "/reports" },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      { name: "Settings", icon: Settings, path: "/settings" },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-[#0B0B0B] border-r border-yellow-600/20 text-white flex flex-col">
      {/* Logo */}
      <div className="border-b border-yellow-600/20 p-6">
        <h1 className="text-2xl font-bold tracking-wide text-yellow-500">
          MERC FACTOR
        </h1>

        <p className="text-sm text-zinc-400 mt-1">
          Maintenance Center
        </p>

        <div className="mt-4 h-px bg-yellow-600/20" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        {sections.map((section) => (
          <div key={section.title} className="mb-8">
            <h2 className="mb-3 px-3 text-xs font-semibold tracking-[0.25em] text-yellow-500 uppercase">
              {section.title}
            </h2>

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                        isActive
                          ? "bg-yellow-500 text-black font-semibold shadow-lg"
                          : "text-zinc-300 hover:bg-zinc-900 hover:text-yellow-400"
                      }`
                    }
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-yellow-600/20 p-4 text-center">
        <p className="text-xs text-zinc-500">Merc Factor ERP</p>

        <p className="text-[11px] text-zinc-600">
          Version 1.0.0 Alpha
        </p>
      </div>
    </aside>
  );
}