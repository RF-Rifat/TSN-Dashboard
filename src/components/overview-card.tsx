import { TrendingUp, TrendingDown } from "lucide-react";

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white p-4 sm:p-6 rounded-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium mb-1">Income</p>
            <h3 className="text-2xl sm:text-4xl font-bold">$ 20.000</h3>
          </div>
          <div className="flex items-center text-emerald-100 mt-2 sm:mt-0">
            <TrendingUp className="h-5 w-5 mr-1" />
            <span>+ 70%</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Customer</p>
            <h3 className="text-2xl sm:text-4xl font-bold">50.000</h3>
          </div>
          <div className="flex items-center text-red-500 mt-2 sm:mt-0">
            <TrendingDown className="h-5 w-5 mr-1" />
            <span>- 10%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
