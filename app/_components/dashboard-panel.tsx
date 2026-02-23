import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PanelTone = "mint" | "peach" | "lilac" | "gold" | "blue" | "neutral";

const toneClass: Record<PanelTone, string> = {
  mint: "bg-[#96cdbf]",
  peach: "bg-[#d9a085]",
  lilac: "bg-[#b4aedb]",
  gold: "bg-[#e8bf63]",
  blue: "bg-[#98b9e5]",
  neutral: "bg-[#d8d4ca]",
};

type DashboardPanelProps = {
  title: string;
  tone?: PanelTone;
  headerRight?: ReactNode;
  className?: string;
  children: ReactNode;
};

export function DashboardPanel({
  title,
  tone = "neutral",
  headerRight,
  className,
  children,
}: DashboardPanelProps) {
  return (
    <Card
      variant="flat"
      className={cn("overflow-hidden border-[#9c9588] bg-[#f8f5ed]", className)}
    >
      <CardHeader
        className={cn(
          "flex h-7 flex-row items-center justify-between border-b border-[#9c9588] px-2 py-0",
          toneClass[tone]
        )}
      >
        <CardTitle className="text-[10px] leading-none font-semibold text-[#3f3a32]">
          {title}
        </CardTitle>
        {headerRight}
      </CardHeader>
      <CardContent className="p-2">{children}</CardContent>
    </Card>
  );
}
