"use client";

import * as React from "react";
import {
  BotIcon,
  Building2Icon,
  ChartColumnBigIcon,
  CircleDollarSignIcon,
  FileBarChart2Icon,
  HomeIcon,
  LandmarkIcon,
  ReceiptTextIcon,
  SettingsIcon,
  SparklesIcon,
  WalletCardsIcon,
  WrenchIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { DashboardPanel } from "./dashboard-panel";
import { DashboardShell, type ShellNavItem } from "./dashboard-shell";
import {
  actionTasks,
  dashboardNavItems,
  projectionBars,
  propertyUnitStates,
} from "../_lib/dashboard-data";

const navIconMap: Record<string, ShellNavItem["icon"]> = {
  forecast: ChartColumnBigIcon,
  assistant: BotIcon,
  buildings: Building2Icon,
  units: HomeIcon,
  "bank-feed": WalletCardsIcon,
  capex: WrenchIcon,
  opex: CircleDollarSignIcon,
  mortgages: LandmarkIcon,
  reports: FileBarChart2Icon,
  settings: SettingsIcon,
};

const navItems: ShellNavItem[] = dashboardNavItems.map((item) => ({
  ...item,
  icon: navIconMap[item.key] ?? SparklesIcon,
}));

export function DashboardScreen() {
  const [activeNav, setActiveNav] = React.useState("forecast");
  const [checkedTasks, setCheckedTasks] = React.useState<Record<string, boolean>>(
    {}
  );

  const toggleTask = (taskId: string) => {
    setCheckedTasks((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  return (
    <DashboardShell navItems={navItems} activeNav={activeNav} onNavSelect={setActiveNav}>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h1 className="font-headline text-[52px] leading-none text-[#b66f4c]">
            Good Morning, Michael
          </h1>
          <Button
            size="xs"
            className="h-6 rounded-[2px] border border-[#8f887b] bg-[#efe8d7] px-3 text-[9px] font-semibold text-[#3f3a32] hover:bg-[#e8dfcc]"
          >
            + ADD NEW
          </Button>
        </div>

        <section className="flex h-[152px] items-stretch justify-between border border-[#3e79cb] bg-[#87ace4] p-3">
          <div className="pr-3">
            <p className="text-[10px] font-medium text-[#355784]">Summary of your portfolio.</p>
            <p className="mb-2 text-[12px] font-semibold text-[#2d4d77]">Monday 21 Jan</p>
            <p className="max-w-[760px] text-[24px] leading-tight text-[#2f3f53]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim
              risus non est aliquet semper. Vivamus viverra quis velit a suscipit.
            </p>
          </div>
          <div className="relative h-full w-[146px] shrink-0 overflow-hidden rounded-md border border-[#6f634c] bg-[#e2b668]">
            <div className="absolute left-3 top-3 h-4 w-4 rounded-full border border-[#7f7050] bg-[#f7e9c2]" />
            <div className="absolute right-3 top-3 h-5 w-8 rounded bg-[#d16d4f]" />
            <div className="absolute bottom-3 left-3 h-16 w-16 border border-[#6d5a46] bg-[#8f6ec1]" />
            <div className="absolute bottom-3 right-3 h-[52px] w-[52px] border border-[#6d5a46] bg-[#d99f58]" />
            <div className="absolute bottom-6 left-10 h-8 w-8 border border-[#6d5a46] bg-[#5c81d5]" />
            <div className="absolute bottom-5 right-7 h-7 w-7 border border-[#6d5a46] bg-[#a9c56e]" />
          </div>
        </section>

        <div className="grid grid-cols-[minmax(0,1fr)_320px] gap-3">
          <ScrollArea className="h-[calc(100vh-290px)] pr-2">
            <div className="space-y-3 pb-3">
              <DashboardPanel
                title="Wealth Projections"
                tone="mint"
                headerRight={
                  <Button
                    size="xs"
                    variant="outline"
                    className="h-5 rounded-[2px] border-[#8c8578] bg-[#f3efe7] px-2 py-0 text-[9px] font-semibold hover:bg-[#ece5da]"
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
                  <div className="h-[220px] border border-[#c3bbaa] bg-[linear-gradient(180deg,#f5f2ea_0%,#eaf4ef_60%,#d4eadf_100%)] p-2">
                    <div className="h-full w-full border border-[#d2ccbe] bg-[linear-gradient(160deg,transparent_0%,transparent_34%,rgba(62,155,123,0.18)_35%,rgba(62,155,123,0.18)_45%,rgba(62,155,123,0.3)_46%,rgba(62,155,123,0.3)_60%,rgba(62,155,123,0.46)_61%,rgba(62,155,123,0.46)_76%,rgba(62,155,123,0.65)_77%,rgba(62,155,123,0.65)_100%)]" />
                  </div>
                  <div className="grid grid-cols-[1.2fr_1fr] gap-2">
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

              <div className="grid grid-cols-2 gap-3">
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
                      className="h-5 rounded-[2px] border-[#8c8578] bg-[#f3efe7] px-1.5 py-0 text-[9px] hover:bg-[#ece5da]"
                    >
                      Repairs & Maintenance
                    </Button>
                    <Button
                      size="xs"
                      variant="outline"
                      className="h-5 rounded-[2px] border-[#8c8578] bg-[#f3efe7] px-1.5 py-0 text-[9px] hover:bg-[#ece5da]"
                    >
                      Last 3 Months
                    </Button>
                  </div>
                }
              >
                <div className="space-y-2">
                  <div className="flex h-[170px] items-end gap-1 border border-[#c3bbaa] bg-[#f5f1e8] p-2">
                    {projectionBars.map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-[#e2b763]"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between border border-[#bfa56a] bg-[#e2be67] p-2 text-[10px] text-[#4b3d23]">
                    <p>Your "Repairs & Maintenance" spend is 50 in the last 3 months.</p>
                    <Button
                      size="xs"
                      className="h-6 rounded-[2px] border border-[#88754e] bg-[#d5a74d] px-2 py-1 text-[9px] text-[#4b3d23] hover:bg-[#c89a41]"
                    >
                      This is 10% less than your projected 8.0%
                    </Button>
                  </div>
                </div>
              </DashboardPanel>
            </div>
          </ScrollArea>

          <div className="min-h-0">
            <DashboardPanel title="Action Items" className="h-[calc(100vh-290px)]">
              <Tabs defaultValue="active" className="h-full gap-1">
                <TabsList
                  variant="line"
                  className="grid h-7 w-full grid-cols-3 rounded-none border border-[#b6afa1] bg-[#ece6dc] p-0"
                >
                  <TabsTrigger
                    value="active"
                    className="h-full rounded-none border-r border-[#b6afa1] text-[10px] data-active:bg-[#f5f0e8] data-active:font-semibold"
                  >
                    Active
                  </TabsTrigger>
                  <TabsTrigger
                    value="past"
                    className="h-full rounded-none border-r border-[#b6afa1] text-[10px] text-[#807a70]"
                  >
                    Past
                  </TabsTrigger>
                  <TabsTrigger value="snoozed" className="h-full rounded-none text-[10px] text-[#807a70]">
                    Snoozed
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="active" className="min-h-0 flex-1">
                  <ScrollArea className="h-[calc(100vh-375px)] pr-1">
                    <div className="space-y-1.5">
                      {actionTasks.map((task) => (
                        <Card
                          key={task.id}
                          variant="flat"
                          className="rounded-none border-[#b6afa1] bg-[#f7f4ed]"
                        >
                          <CardContent className="p-2">
                            <div className="flex items-start gap-2">
                              <Checkbox
                                checked={checkedTasks[task.id] ?? false}
                                onCheckedChange={() => toggleTask(task.id)}
                                className="mt-0.5 size-3.5 rounded-[2px] border-[#999082]"
                              />
                              <div>
                                <p className="text-[10px] font-medium text-[#3f3a32]">{task.title}</p>
                                <p className="mt-0.5 text-[9px] text-[#6f685e]">{task.location}</p>
                                <p className="mt-1 text-[8px] uppercase tracking-wide text-[#9a9489]">
                                  {task.due}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>

                <TabsContent value="past" className="py-4 text-center text-[10px] text-[#8a847a]">
                  No past items
                </TabsContent>
                <TabsContent value="snoozed" className="py-4 text-center text-[10px] text-[#8a847a]">
                  No snoozed items
                </TabsContent>
              </Tabs>
            </DashboardPanel>

            <div className="mt-3">
              <DashboardPanel title="Property Units" tone="blue">
                <div className="space-y-3">
                  <p className="font-headline text-[44px] leading-none text-[#3f3a32]">15 Buildings</p>
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
                  <Separator className="bg-[#c8c3b8]" />
                </div>
              </DashboardPanel>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
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
      className={emphasize ? "rounded-none border-[#b6afa1] bg-[#ece6fb]" : "rounded-none border-[#b6afa1] bg-[#f5f0ea]"}
    >
      <CardContent className="px-2 py-1">
        <p className="text-[9px] uppercase tracking-wide text-[#6c665f]">{label}</p>
        <p className={emphasize ? "text-[36px] leading-none font-semibold text-[#3f3a32]" : "text-[22px] leading-tight font-semibold text-[#3f3a32]"}>
          {value}
        </p>
      </CardContent>
    </Card>
  );
}

function CountLegend({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-[22px] leading-none font-semibold text-[#3f3a32]">{value}</p>
      <p className="text-[#6f685e]">{label}</p>
    </div>
  );
}
