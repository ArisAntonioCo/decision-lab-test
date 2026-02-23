"use client";

import { ChartNoAxesCombinedIcon, SettingsIcon, SparklesIcon } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { DashboardPanel } from "../dashboard-panel";
import { wealthProjectionData } from "../../_lib/dashboard-data";

const wealthProjectionChartConfig = {
  conservative: { label: "Conservative Scenario", color: "#73c6af" },
  likely: { label: "Likely Scenario", color: "#5ea992" },
  optimistic: { label: "Optimistic Scenario", color: "#b2ddd2" },
} satisfies ChartConfig;

export function WealthProjectionsPanel() {
  return (
    <DashboardPanel
      title="Wealth Projections"
      titleIcon={<ChartNoAxesCombinedIcon className="size-4 text-[#0f2a28]" />}
      tone="mint"
      headerRight={
        <Button
          size="xs"
          variant="outline"
          className="h-7 rounded-[6px] border-[#2d2a24] bg-[#f4f0e8] px-2.5 text-[10px] font-semibold tracking-[0.08em] text-[#1e1d1a] shadow-[0_1px_0_0_rgba(0,0,0,0.2)] hover:bg-[#eee8de]"
        >
          <SettingsIcon className="size-3.5" />
          SETTINGS
        </Button>
      }
    >
      <div className="space-y-2">
        <div>
          <p className="text-[39px] leading-none font-semibold text-[#4f4b44]">
            $13,107,926.29
            <span className="ml-1 text-[12px] font-medium">CAD</span>
          </p>
          <p className="text-[10px] text-[#579377]">+561,966.95 (6.7%) · (+666.85M) · ALL TIME</p>
        </div>
        <div className="h-[332px] border border-[#c3bbaa] bg-[#f5f2ea] p-3">
          <ChartContainer
            className="h-full w-full rounded-none border border-[#d2ccbe] bg-[#f7f4ee]"
            config={wealthProjectionChartConfig}
          >
            <AreaChart data={wealthProjectionData} margin={{ top: 10, right: 12, left: 12, bottom: 4 }}>
              <CartesianGrid strokeDasharray="0" vertical stroke="#bcb6a8" opacity={0.65} />
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
                tickFormatter={(value) => `$${value}.0M`}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    indicator="line"
                    labelFormatter={(value) => `Year ${String(value)}`}
                    formatter={(value, name) => (
                      <div className="flex w-full items-center justify-between gap-4">
                        <span>
                          {
                            wealthProjectionChartConfig[
                              name as keyof typeof wealthProjectionChartConfig
                            ]?.label
                          }
                        </span>
                        <span className="font-mono tabular-nums">${Number(value).toFixed(1)}M</span>
                      </div>
                    )}
                  />
                }
              />
              <Area
                type="monotone"
                dataKey="conservative"
                stroke="var(--color-conservative)"
                fill="var(--color-conservative)"
                fillOpacity={0.75}
                strokeWidth={1.25}
              />
              <Area
                type="monotone"
                dataKey="likely"
                stroke="var(--color-likely)"
                fill="var(--color-likely)"
                fillOpacity={0.45}
                strokeWidth={1.25}
              />
              <Area
                type="monotone"
                dataKey="optimistic"
                stroke="var(--color-optimistic)"
                fill="var(--color-optimistic)"
                fillOpacity={0.3}
                strokeWidth={1.25}
              />
            </AreaChart>
          </ChartContainer>
        </div>
        <div className="grid gap-2 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-0.5 border border-[#b6afa1] bg-[#f6f1ea] p-2 text-[10px]">
            <p>
              <span className="inline-block w-3 text-[#2d7a5f]">●</span>
              Likely Scenario:
              <span className="ml-1 font-semibold">$13.4M-$74.2M</span>
            </p>
            <p>
              <span className="inline-block w-3 text-[#48a68a]">●</span>
              Optimistic Scenario:
              <span className="ml-1 font-semibold">$11.4M-$89.7M</span>
            </p>
            <p>
              <span className="inline-block w-3 text-[#79c6b2]">●</span>
              Conservative Scenario:
              <span className="ml-1 font-semibold">$13.3M-$54.4M</span>
            </p>
          </div>
          <div className="flex items-center gap-2 border border-[#9ea697] bg-[#56a889] px-2 text-[10px] text-white">
            <div className="grid size-8 place-content-center rounded border border-white/60 bg-[#ecac5f]">
              <SparklesIcon className="size-4" />
            </div>
            <p>In 20 years, we project your portfolio will be worth around $74.2M.</p>
          </div>
        </div>
      </div>
    </DashboardPanel>
  );
}
