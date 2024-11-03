"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";


const data = [
  { week: "Week 1", sales: 5, returns: 4, revenue: 4 },
  { week: "Week 2", sales: 8, returns: 7, revenue: 5 },
  { week: "Week 3", sales: 15, returns: 10, revenue: 5 },
  { week: "Week 4", sales: 18, returns: 12, revenue: 8 },
];

export function StatisticsChart() {
  return (
    <Card className="mt-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Statistic</CardTitle>
        <select className="text-sm border rounded-md px-2 py-1">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="week" />
              <YAxis />
              <Bar
                dataKey="sales"
                fill="rgb(16, 185, 129)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="returns"
                fill="rgb(147, 197, 253)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="revenue"
                fill="rgb(34, 197, 94)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
