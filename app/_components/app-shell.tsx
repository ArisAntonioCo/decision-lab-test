"use client";

import type { ReactNode } from "react";
import {
  ArrowUpDownIcon,
  BellIcon,
  BotIcon,
  Building2Icon,
  ChartColumnBigIcon,
  CircleDollarSignIcon,
  FileBarChart2Icon,
  HomeIcon,
  LandmarkIcon,
  RefreshCcwIcon,
  SearchIcon,
  SettingsIcon,
  SparklesIcon,
  WalletCardsIcon,
  WrenchIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarLogo } from "@/components/ui/sidebar-logo";
import { cn } from "@/lib/utils";
import { dashboardNavItems } from "../_lib/dashboard-data";

const navIconMap = {
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
} as const;

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="h-screen w-screen bg-[var(--app-bg)]">
      <div className="flex h-full w-full overflow-hidden border border-[var(--app-border)] bg-[var(--app-surface)]">
        <aside className="hidden w-56 shrink-0 border-r border-[var(--app-border)] bg-[var(--app-surface-raised)] lg:block">
          <div className="flex h-12 items-center gap-2 border-b border-[var(--app-border)] px-4">
            <SidebarLogo />
            <span className="text-xs font-semibold tracking-[0.08em] text-[#1f1f1f] uppercase">
              Redpoint
            </span>
          </div>

          <div className="space-y-2 p-3">
            <Button
              size="xs"
              className="h-7 w-full justify-start rounded-[4px] border border-[#b89956] bg-[#e4bf60] px-2.5 text-[11px] font-semibold text-[#3b3427] hover:bg-[#dfb450]"
            >
              Overview
            </Button>
            <nav className="space-y-1">
              {dashboardNavItems.map((item) => {
                const Icon = navIconMap[item.key as keyof typeof navIconMap] ?? SparklesIcon;
                const isActive = item.key === "forecast";

                return (
                  <Button
                    key={item.key}
                    size="xs"
                    variant="ghost"
                    className={cn(
                      "h-7 w-full justify-start rounded-[4px] px-2.5 text-[11px] font-medium text-[var(--app-muted)] hover:bg-[var(--app-chrome)] hover:text-[var(--app-text)]",
                      isActive && "bg-[var(--app-chrome)] text-[var(--app-text)]"
                    )}
                  >
                    <Icon className="size-3.5" />
                    {item.label}
                  </Button>
                );
              })}
            </nav>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-12 items-center justify-between border-b border-[var(--app-border)] bg-[var(--app-surface-raised)] px-3 md:px-5">
            <div className="flex items-center gap-2">
              <SearchIcon className="size-3.5 text-[var(--app-muted)]" />
              <Input
                placeholder="Find anything..."
                className="h-8 w-[220px] rounded-[4px] border-[var(--app-border)] bg-[var(--app-surface)] px-2.5 text-xs shadow-none focus-visible:ring-0 md:w-[320px]"
              />
            </div>
            <div className="flex items-center gap-1">
              <Button
                size="icon-xs"
                variant="ghost"
                className="size-7 rounded-[4px] text-[var(--app-muted)]"
              >
                <RefreshCcwIcon className="size-3.5" />
              </Button>
              <Button
                size="icon-xs"
                variant="ghost"
                className="size-7 rounded-[4px] text-[var(--app-muted)]"
              >
                <ArrowUpDownIcon className="size-3.5" />
              </Button>
              <Button
                size="icon-xs"
                variant="ghost"
                className="size-7 rounded-[4px] text-[var(--app-muted)]"
              >
                <BellIcon className="size-3.5" />
              </Button>
            </div>
          </header>

          <main className="min-h-0 flex-1 overflow-auto p-3 md:p-5">{children}</main>
        </div>
      </div>
    </div>
  );
}
