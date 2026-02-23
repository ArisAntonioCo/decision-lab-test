import { Separator } from "@/components/ui/separator";
import { DashboardPanel } from "../dashboard-panel";
import { propertyUnitStates } from "../../_lib/dashboard-data";

export function PropertyUnitsPanel() {
  return (
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
