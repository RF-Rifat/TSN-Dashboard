import { Bell, Plus, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


export function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white border-b lg:px-6">
      <div className="flex items-center">
        {children}
        <div className="relative ml-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search Here"
            className="w-full pl-10 pr-4 py-2 bg-white"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="!size-6" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        </Button>
        <Button className="bg-emerald-500 hover:bg-emerald-600">
          <Plus className="h-4 w-4 mr-2" />
          New Product
        </Button>
      </div>
    </header>
  );
}
