import {
  LucideIcon,
  LayoutGrid,
  BarChart3,
  Receipt,
  Users,
  ShoppingBag,
  DollarSign,
  Megaphone,
  Settings,
  LogOut,
  HelpCircle,
} from "lucide-react";

interface NavItem {
  title: string;
  icon: LucideIcon;
  href: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { title: "Dashboard", icon: LayoutGrid, href: "/", isActive: true },
  { title: "Insight", icon: BarChart3, href: "/insight" },
  { title: "Transaction", icon: Receipt, href: "/transaction" },
  { title: "Customer", icon: Users, href: "/customer" },
  { title: "Shop", icon: ShoppingBag, href: "/shop" },
  { title: "Income", icon: DollarSign, href: "/income" },
  { title: "Promote", icon: Megaphone, href: "/promote" },
  { title: "Settings", icon: Settings, href: "/settings" },
];

const bottomNavItems: NavItem[] = [
  { title: "Sign Out", icon: LogOut, href: "/signout" },
  { title: "Help", icon: HelpCircle, href: "/help" },
];

export function SidebarNav() {
  return (
    <div className="flex flex-col h-full w-64 bg-white border-r rounded">
      <div className="p-6">
        <img src="/logo.png" alt="logo" />
      </div>

      <nav className="flex-1 px-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                item.isActive
                  ? "bg-gradient-to-r from-emerald-400 to-emerald-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="px-4 py-4 border-t">
        <div className="space-y-1">
          {bottomNavItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
