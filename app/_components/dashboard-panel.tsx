import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PanelTone = "mint" | "peach" | "lilac" | "gold" | "blue" | "neutral";

const toneClass: Record<PanelTone, string> = {
  mint: "bg-[var(--panel-mint)]",
  peach: "bg-[var(--panel-peach)]",
  lilac: "bg-[var(--panel-lilac)]",
  gold: "bg-[var(--panel-gold)]",
  blue: "bg-[var(--panel-blue)]",
  neutral: "bg-[var(--panel-neutral)]",
};

type DashboardPanelProps = {
  title: ReactNode;
  titleIcon?: ReactNode;
  tone?: PanelTone;
  headerRight?: ReactNode;
  className?: string;
  children: ReactNode;
};

export function DashboardPanel({
  title,
  titleIcon,
  tone = "neutral",
  headerRight,
  className,
  children,
}: DashboardPanelProps) {
  return (
    <Card
      variant="flat"
      className={cn(
        "gap-0 py-0 overflow-hidden rounded-none border-[var(--app-border)] bg-[var(--app-surface-raised)]",
        className
      )}
    >
      <div
        className={cn(
          "flex h-12 min-w-0 flex-row items-center justify-between rounded-none border-b border-[var(--app-border)] px-3 py-0",
          toneClass[tone]
        )}
      >
        <h3 className="flex min-w-0 items-center gap-2 text-base leading-none font-semibold text-[var(--app-text)]">
          {titleIcon}
          <span>{title}</span>
        </h3>
        {headerRight ? <div className="shrink-0 pl-2">{headerRight}</div> : null}
      </div>
      <CardContent className="px-2 pt-3 pb-2">{children}</CardContent>
    </Card>
  );
}
