import {
  LayoutDashboard,
  Users,
  Car,
  ClipboardList,
  Package,
  FileText,
  BarChart3,
  Settings,
} from "lucide-react"

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Customers",
    icon: Users,
  },
  {
    name: "Vehicles",
    icon: Car,
  },
  {
    name: "Job Cards",
    icon: ClipboardList,
  },
  {
    name: "Inventory",
    icon: Package,
  },
  {
    name: "Invoices",
    icon: FileText,
  },
  {
    name: "Reports",
    icon: BarChart3,
  },
  {
    name: "Settings",
    icon: Settings,
  },
]

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-background p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">
          Merc Factor ERP
        </h1>
        <p className="text-sm text-muted-foreground">
          Maintenance Center
        </p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.name}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-muted"
            >
              <Icon size={18} />
              {item.name}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}