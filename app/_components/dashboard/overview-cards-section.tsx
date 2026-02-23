import { HomeIcon, PiggyBankIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { DashboardPanel } from "../dashboard-panel";

export function OverviewCardsSection() {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      <DashboardPanel
        title="Total investment & return"
        titleIcon={<PiggyBankIcon className="size-4 text-[#2f2a44]" />}
        tone="lilac"
      >
        <div className="space-y-3">
          <div className="rounded-[6px] border border-[#7f78ad] bg-[#c8bfef] p-4 text-center">
            <p className="text-[11px] text-[#4e4868]">Return on investment</p>
            <p className="mt-1 font-headline text-[52px] leading-none text-[#3d3853]">+120.5%</p>
            <p className="mt-1 text-[10px] tracking-[0.06em] text-[#4e4868] uppercase">
              (+18.7% annualized)
            </p>
          </div>

          <div className="grid grid-cols-2 border-b border-[#b8b2cc] pb-3">
            <div className="border-r border-[#7c74b0] px-2 text-center">
              <p className="text-[12px] font-semibold text-[#3f3b58]">Total Investment to Date</p>
              <p className="mt-1 text-[9px] tracking-[0.06em] text-[#615a79] uppercase">
                Downpayments + Taxes + Closing
              </p>
              <p className="mt-5 font-headline text-[45px] leading-none text-[#3f3b58]">$1,383,049</p>
            </div>
            <div className="px-2 text-center">
              <p className="text-[12px] font-semibold text-[#3f3b58]">With Stabilization</p>
              <p className="mt-1 text-[9px] tracking-[0.06em] text-[#615a79] uppercase">
                Total Capital Invested
              </p>
              <p className="mt-5 font-headline text-[45px] leading-none text-[#3f3b58]">$5,678,500</p>
            </div>
          </div>

          <div className="space-y-1 rounded-[4px] bg-[#e3e0ec] px-3 py-2 text-[12px]">
            <SummaryRow label="Current Equity:" value="$12,522,926" />
            <SummaryRow label="Total Invested:" value="$5,678,500" />
            <div className="my-1 border-t border-[#cbc5dc]" />
            <SummaryRow label="Gain/Loss:" value="$6,844,426" emphasize />
          </div>
        </div>
      </DashboardPanel>

      <DashboardPanel
        title="Portfolio Overview"
        titleIcon={<HomeIcon className="size-4 text-[#1e1d1a]" />}
        tone="peach"
      >
        <div className="space-y-3">
          <div className="grid grid-cols-2 border-b border-[var(--app-border)] pb-3">
            <div className="border-r border-[var(--app-border)] text-center">
              <p className="font-headline text-[42px] leading-[0.95] text-[#3f3b58]">5</p>
              <p className="text-[24px] leading-none text-[#4b4338]">Buildings</p>
            </div>
            <div className="text-center">
              <p className="font-headline text-[42px] leading-[0.95] text-[#3f3b58]">106</p>
              <p className="text-[24px] leading-none text-[#4b4338]">Units</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <PortfolioMetric label="Annual Revenue" value="$3,078,000" monthly="$256,500/MO" />
            <PortfolioMetric label="Net Cashflow" value="$275,929" monthly="$22,994/MO" />
            <PortfolioMetric label="DSCR" value="1.25×" monthly="COVERAGE RATIO" />
            <PortfolioMetric label="NOI" value="$1,383,049" monthly="$115,254/MO" />
          </div>
        </div>
      </DashboardPanel>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  emphasize = false,
}: {
  label: string;
  value: string;
  emphasize?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <p className={emphasize ? "font-semibold text-[#5b4fe6]" : "font-medium text-[#4f4869]"}>{label}</p>
      <p className={emphasize ? "font-semibold text-[#5b4fe6]" : "font-medium text-[#4f4869]"}>{value}</p>
    </div>
  );
}

function PortfolioMetric({
  label,
  value,
  monthly,
}: {
  label: string;
  value: string;
  monthly: string;
}) {
  return (
    <Card variant="flat" className="rounded-[6px] border-[var(--app-border)] bg-[#eadbd5]">
      <CardContent className="px-3 py-2">
        <p className="text-[10px] font-medium text-[#584f45] uppercase">{label}</p>
        <div className="mt-7">
          <p className="font-headline text-[26px] leading-none text-[#4a433c]">{value}</p>
          <p className="mt-1 text-[10px] tracking-[0.06em] text-[#5b5248] uppercase">{monthly}</p>
        </div>
      </CardContent>
    </Card>
  );
}
