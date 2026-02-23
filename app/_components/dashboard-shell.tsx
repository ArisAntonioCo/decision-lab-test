"use client";

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  SearchIcon,
  BellIcon,
  ArrowUpDownIcon,
  RefreshCcwIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarLogo } from "@/components/ui/sidebar-logo";
import { cn } from "@/lib/utils";

export type ShellNavItem = {
  key: string;
  label: string;
  icon: LucideIcon;
};

type DashboardShellProps = {
  navItems: ShellNavItem[];
  activeNav: string;
  onNavSelect: (key: string) => void;
  children: ReactNode;
};

export function DashboardShell({
  navItems,
  activeNav,
  onNavSelect,
  children,
}: DashboardShellProps) {
  return (
    <div className="h-screen w-screen bg-[#1b1b1b]">
      <div className="flex h-full w-full border border-[#2e2a24] bg-[#ece8de]">
        <aside className="w-[148px] border-r border-[#8f887b] bg-[#e5dfd0]">
          <div className="flex h-10 items-center border-b border-[#a8a091] px-3">
            <SidebarLogo className="h-5" />
          </div>

          <div className="p-2">
            <Button
              size="xs"
              className="mb-2 h-6 w-full justify-start rounded-[2px] border border-[#b89956] bg-[#e4bf60] px-2 text-[10px] font-semibold text-[#3b3427] hover:bg-[#dfb450]"
            >
              Overview
            </Button>
            <nav className="space-y-0.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.key;
                return (
                  <Button
                    key={item.key}
                    size="xs"
                    variant="ghost"
                    onClick={() => onNavSelect(item.key)}
                    className={cn(
                      "h-6 w-full justify-start rounded-[2px] px-2 text-[10px] font-medium text-[#514b43] hover:bg-[#dbd4c5]",
                      isActive && "bg-[#dbd4c5]"
                    )}
                  >
                    <Icon className="size-3 text-[#6b6459]" />
                    {item.label}
                  </Button>
                );
              })}
            </nav>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-10 items-center justify-between border-b border-[#8f887b] bg-[#f4f1ea] px-4">
            <div className="flex items-center gap-2">
              <SearchIcon className="size-3 text-[#8e877b]" />
              <Input
                placeholder="Find anything..."
                className="h-6 w-[290px] rounded-[2px] border-[#c4bdae] bg-white px-2 text-[10px] text-[#6f685e] shadow-none focus-visible:ring-0"
              />
            </div>
            <div className="flex items-center gap-1">
              <Button
                size="icon-xs"
                variant="ghost"
                className="size-5 rounded-[2px] text-[#7f786d]"
              >
                <RefreshCcwIcon className="size-3" />
              </Button>
              <Button
                size="icon-xs"
                variant="ghost"
                className="size-5 rounded-[2px] text-[#7f786d]"
              >
                <ArrowUpDownIcon className="size-3" />
              </Button>
              <Button
                size="icon-xs"
                variant="ghost"
                className="size-5 rounded-[2px] text-[#7f786d]"
              >
                <BellIcon className="size-3" />
              </Button>
            </div>
          </header>

          <Separator className="bg-transparent" />
          <main className="min-h-0 flex-1 overflow-hidden p-4">{children}</main>
        </div>
      </div>
    </div>
  );
}
