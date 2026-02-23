import { Card, CardContent } from "@/components/ui/card";
import { DashboardPanel } from "../dashboard-panel";

export function OverviewCardsSection() {
  return (
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
