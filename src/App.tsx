import { useState } from "react";
import { StatisticsChart } from "./components/chart";
import { CommentsSection } from "./components/comment-section";
import { OverviewCards } from "./components/overview-card";
import { PopularProducts } from "./components/popular-product";
import { SidebarNav } from "./components/sidebar";
import { TopClients } from "./components/topclient";
import { Menu } from "lucide-react";
import { Drawer } from "./components/drawer";
import { Header } from "./components/header";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col h-screen bg-gray-100 lg:flex-row">
      <Drawer isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <SidebarNav />
      </Drawer>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header>
          <button
            className="p-2 lg:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <Menu size={24} />
          </button>
        </Header>

        <div className="flex-1 overflow-auto p-4 lg:p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Main Content - full width on mobile, 2 columns on larger screens */}
            <div className="space-y-6 lg:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Overview</h2>
                <select className="text-sm border rounded-md px-2 py-1">
                  <option>All Time</option>
                  <option>This Week</option>
                  <option>This Month</option>
                </select>
              </div>

              <OverviewCards />
              <TopClients />
              <CommentsSection />
            </div>

            {/* Right Sidebar - full width on mobile, 1 column on larger screens */}
            <div className="space-y-6">
              <PopularProducts />
              <StatisticsChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
