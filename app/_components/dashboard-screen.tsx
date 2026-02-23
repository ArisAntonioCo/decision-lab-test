"use client";

import { ActionItemsPanel } from "./dashboard/action-items-panel";
import { DashboardHero } from "./dashboard/dashboard-hero";
import { OverviewCardsSection } from "./dashboard/overview-cards-section";
import { PropertyUnitsPanel } from "./dashboard/property-units-panel";
import { SpendingAnalyticsPanel } from "./dashboard/spending-analytics-panel";
import { WealthProjectionsPanel } from "./dashboard/wealth-projections-panel";

export function DashboardScreen() {
  return (
    <div className="space-y-4">
      <DashboardHero />

      <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_330px]">
        <div className="space-y-3 pb-3 pr-2">
          <WealthProjectionsPanel />
          <OverviewCardsSection />
          <SpendingAnalyticsPanel />
        </div>

        <div className="space-y-3">
          <ActionItemsPanel />
          <PropertyUnitsPanel />
        </div>
      </div>
    </div>
  );
}
