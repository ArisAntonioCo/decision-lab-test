"use client";

import { ChevronDownIcon } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { DashboardPanel } from "../dashboard-panel";
import { spendingAnalyticsData } from "../../_lib/dashboard-data";

const spendingAnalyticsChartConfig = {
  amount: { label: "Spend", color: "#e2be67" },
} satisfies ChartConfig;

export function SpendingAnalyticsPanel() {
  return (
    <DashboardPanel
      title="Spending Analytics"
      tone="gold"
      headerRight={
        <div className="flex gap-1">
          <Button
            size="xs"
            variant="outline"
            className="h-6 rounded-[4px] border-[var(--app-border)] bg-[var(--app-surface-raised)] px-2 py-0 text-[9px] hover:bg-[var(--app-chrome)]"
          >
            Repairs &amp; Maintenance
            <ChevronDownIcon className="size-3" />
          </Button>
          <Button
            size="xs"
            variant="outline"
            className="h-6 rounded-[4px] border-[var(--app-border)] bg-[var(--app-surface-raised)] px-2 py-0 text-[9px] hover:bg-[var(--app-chrome)]"
          >
            Last 3 Months
            <ChevronDownIcon className="size-3" />
          </Button>
        </div>
      }
    >
      <div className="space-y-2">
        <div className="h-[290px] border border-[#c3bbaa] bg-[#f5f1e8] p-3">
          <ChartContainer className="h-full w-full" config={spendingAnalyticsChartConfig}>
            <BarChart data={spendingAnalyticsData} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
              <CartesianGrid strokeDasharray="0" vertical stroke="#c0b8a7" opacity={0.6} />
              <XAxis
                dataKey="year"
                axisLine={{ stroke: "#867f73" }}
                tickLine={false}
                tick={{ fill: "#625c53", fontSize: 11 }}
              />
              <YAxis
                domain={[0, 100]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#625c53", fontSize: 11 }}
                tickFormatter={(value) => `$${value}M`}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => `Year ${String(value)}`}
                    formatter={(value) => (
                      <div className="flex w-full items-center justify-between gap-4">
                        <span>Spend</span>
                        <span className="font-mono tabular-nums">${Number(value).toFixed(0)}M</span>
                      </div>
                    )}
                  />
                }
              />
              <Bar dataKey="amount" radius={[0, 0, 0, 0]}>
                {spendingAnalyticsData.map((entry, index) => (
                  <Cell key={`spend-${entry.year}`} fill={index % 2 === 0 ? "#e6cf97" : "#e2be67"} />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
        <div className="flex items-center justify-between border border-[#bfa56a] bg-[#e2be67] p-2 text-[10px] text-[#4b3d23]">
          <p>Your &quot;Repairs &amp; Maintenance&quot; spend is 50 in the last 3 months.</p>
          <Button
            size="xs"
            className="h-6 rounded-[4px] border border-[#88754e] bg-[#d5a74d] px-2 py-1 text-[9px] text-[#4b3d23] hover:bg-[#c89a41]"
          >
            This is 10% less than your projected 8.0%
          </Button>
        </div>
      </div>
    </DashboardPanel>
  );
}
