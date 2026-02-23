"use client";

import * as React from "react";
import { ChartNoAxesCombinedIcon, SparklesIcon } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { PortfolioSummaryIllustration } from "@/components/ui/portfolio-summary-illustration";
import { DashboardPanel } from "./dashboard-panel";
import {
  actionTasks,
  propertyUnitStates,
  spendingAnalyticsData,
  wealthProjectionData,
} from "../_lib/dashboard-data";

const wealthProjectionChartConfig = {
  conservative: { label: "Conservative Scenario", color: "#73c6af" },
  likely: { label: "Likely Scenario", color: "#5ea992" },
  optimistic: { label: "Optimistic Scenario", color: "#b2ddd2" },
} satisfies ChartConfig;

const spendingAnalyticsChartConfig = {
  amount: { label: "Spend", color: "#e2be67" },
} satisfies ChartConfig;

export function DashboardScreen() {
  const [checkedTasks, setCheckedTasks] = React.useState<Record<string, boolean>>(
    {}
  );

  const toggleTask = (taskId: string) => {
    setCheckedTasks((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h1 className="font-headline text-[34px] leading-none text-[var(--app-brand)] md:text-[52px]">
          Good Morning, Michael
        </h1>
        <Button
          size="xs"
          className="h-7 rounded-[4px] border border-[var(--app-border-strong)] bg-[var(--app-surface-raised)] px-3 text-[10px] font-semibold text-[var(--app-text)] hover:bg-[var(--app-chrome)]"
        >
          + ADD NEW
        </Button>
      </div>

      <section className="flex min-h-[152px] items-stretch justify-between border border-[#3e79cb] bg-[#87ace4] p-3">
        <div className="pr-3">
          <p className="text-[10px] font-medium text-[#355784]">Summary of your portfolio.</p>
          <p className="mb-2 text-[12px] font-semibold text-[#2d4d77]">Monday 21 Jan</p>
          <p className="max-w-[760px] text-[20px] leading-tight text-[#2f3f53] md:text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim risus
            non est aliquet semper. Vivamus viverra quis velit a suscipit.
          </p>
        </div>
        <div className="hidden h-full w-[146px] shrink-0 overflow-hidden rounded-md border border-[#6f634c] bg-[#e2b668] md:block">
          <PortfolioSummaryIllustration />
        </div>
      </section>

      <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_330px]">
        <div className="space-y-3 pb-3 pr-2">
            <DashboardPanel
              title="Wealth Projections"
              titleIcon={<ChartNoAxesCombinedIcon className="size-4 text-[#0f2a28]" />}
              tone="mint"
              headerRight={
                <Button
                  size="xs"
                  variant="outline"
                  className="h-10 rounded-[6px] border-[#2d2a24] bg-[#f4f0e8] px-5 text-xs font-semibold tracking-[0.08em] text-[#1e1d1a] shadow-[0_1px_0_0_rgba(0,0,0,0.2)] hover:bg-[#eee8de]"
                >
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
                  <p className="text-[10px] text-[#579377]">
                    +561,966.95 (6.7%) · (+666.85M) · ALL TIME
                  </p>
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
                                <span>{wealthProjectionChartConfig[name as keyof typeof wealthProjectionChartConfig]?.label}</span>
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

            <div className="grid gap-3 lg:grid-cols-2">
              <DashboardPanel title="Total investment & return" tone="lilac">
                <div className="space-y-2">
                  <div className="border border-[#a29bbe] bg-[#c8bfef] p-3 text-center">
                    <p className="text-[11px] text-[#5b5670]">Return on investment</p>
                    <p className="text-[42px] leading-none font-semibold text-[#3d3853]">+120.5%</p>
                    <p className="text-[11px] text-[#5b5670]">(6.8% in annualized)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-[10px]">
                    <Metric label="Total investment to date" value="$1,383,049" />
                    <Metric label="With stabilization" value="$5,678,500" />
                    <Metric label="Current Equity" value="$12,522,206" />
                    <Metric label="Total Invested" value="$5,679,500" />
                  </div>
                </div>
              </DashboardPanel>

              <DashboardPanel title="Portfolio Overview" tone="peach">
                <div className="grid grid-cols-2 gap-1">
                  <Metric label="Buildings" value="5" emphasize />
                  <Metric label="Units" value="106" emphasize />
                  <Metric label="Annual Revenue" value="$3,078,000" />
                  <Metric label="Net Cashflow" value="$275,929" />
                  <Metric label="DSCR" value="1.25x" />
                  <Metric label="NOI" value="$1,383,049" />
                </div>
              </DashboardPanel>
            </div>

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
                    Repairs & Maintenance
                  </Button>
                  <Button
                    size="xs"
                    variant="outline"
                    className="h-6 rounded-[4px] border-[var(--app-border)] bg-[var(--app-surface-raised)] px-2 py-0 text-[9px] hover:bg-[var(--app-chrome)]"
                  >
                    Last 3 Months
                  </Button>
                </div>
              }
            >
              <div className="space-y-2">
                <div className="h-[290px] border border-[#c3bbaa] bg-[#f5f1e8] p-3">
                  <ChartContainer
                    className="h-full w-full"
                    config={spendingAnalyticsChartConfig}
                  >
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
        </div>

        <div className="space-y-3">
          <DashboardPanel title="Action Items">
            <Tabs defaultValue="active" className="gap-1">
              <TabsList
                variant="line"
                className="grid h-8 w-full grid-cols-3 rounded-none border border-[var(--app-border)] bg-[var(--app-chrome)] p-0"
              >
                <TabsTrigger
                  value="active"
                  className="h-full rounded-none border-r border-[var(--app-border)] text-[10px] data-active:bg-[var(--app-surface-raised)] data-active:font-semibold"
                >
                  Active
                </TabsTrigger>
                <TabsTrigger
                  value="past"
                  className="h-full rounded-none border-r border-[var(--app-border)] text-[10px] text-[var(--app-muted)]"
                >
                  Past
                </TabsTrigger>
                <TabsTrigger
                  value="snoozed"
                  className="h-full rounded-none text-[10px] text-[var(--app-muted)]"
                >
                  Snoozed
                </TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="pr-1">
                <div className="space-y-1.5">
                    {actionTasks.map((task) => (
                      <Card
                        key={task.id}
                        variant="flat"
                        className="rounded-none border-[var(--app-border)] bg-[var(--app-surface-raised)]"
                      >
                        <CardContent className="p-2">
                          <div className="flex items-start gap-2">
                            <Checkbox
                              checked={checkedTasks[task.id] ?? false}
                              onCheckedChange={() => toggleTask(task.id)}
                              className="mt-0.5 size-3.5 rounded-[2px] border-[var(--app-border-strong)]"
                            />
                            <div>
                              <p className="text-[10px] font-medium text-[var(--app-text)]">
                                {task.title}
                              </p>
                              <p className="mt-0.5 text-[9px] text-[var(--app-muted)]">
                                {task.location}
                              </p>
                              <p className="mt-1 text-[8px] tracking-wide text-[var(--app-muted)] uppercase">
                                {task.due}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="past" className="py-4 text-center text-[10px] text-[var(--app-muted)]">
                No past items
              </TabsContent>
              <TabsContent
                value="snoozed"
                className="py-4 text-center text-[10px] text-[var(--app-muted)]"
              >
                No snoozed items
              </TabsContent>
            </Tabs>
          </DashboardPanel>

          <DashboardPanel title="Property Units" tone="blue">
            <div className="space-y-3">
              <p className="font-headline text-[44px] leading-none text-[var(--app-text)]">15 Buildings</p>
              <div className="grid grid-cols-12 gap-1">
                {propertyUnitStates.map((state, index) => (
                  <div
                    key={`${state}-${index}`}
                    className={
                      state === "occupied"
                        ? "h-[72px] bg-[#77a7e6]"
                        : state === "renovation"
                          ? "h-[72px] bg-[#a8c2e8]"
                          : "h-[72px] bg-[#c8cdd5]"
                    }
                  />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 text-[10px]">
                <CountLegend value="7" label="Occupied" />
                <CountLegend value="5" label="Renovation" />
                <CountLegend value="3" label="Vacant" />
              </div>
              <Separator className="bg-[var(--app-border)]" />
            </div>
          </DashboardPanel>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  emphasize = false,
}: {
  label: string;
  value: string;
  emphasize?: boolean;
}) {
  return (
    <Card
      variant="flat"
      className={
        emphasize
          ? "rounded-none border-[var(--app-border)] bg-[#ece6fb]"
          : "rounded-none border-[var(--app-border)] bg-[#f5f0ea]"
      }
    >
      <CardContent className="px-2 py-1">
        <p className="text-[9px] tracking-wide text-[var(--app-muted)] uppercase">{label}</p>
        <p
          className={
            emphasize
              ? "text-[36px] leading-none font-semibold text-[var(--app-text)]"
              : "text-[22px] leading-tight font-semibold text-[var(--app-text)]"
          }
        >
          {value}
        </p>
      </CardContent>
    </Card>
  );
}

function CountLegend({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-[22px] leading-none font-semibold text-[var(--app-text)]">{value}</p>
      <p className="text-[var(--app-muted)]">{label}</p>
    </div>
  );
}
