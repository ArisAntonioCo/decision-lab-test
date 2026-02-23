import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortfolioSummaryIllustration } from "@/components/ui/portfolio-summary-illustration";

export function DashboardHero() {
  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <h1 className="font-headline text-[34px] leading-none text-[var(--app-brand)] md:text-[52px]">
          Good Morning, Michael
        </h1>
        <Button
          size="xs"
          className="h-6 rounded-[4px] border border-[var(--app-border-strong)] bg-[var(--app-surface-raised)] px-2 text-[9px] font-semibold text-[var(--app-text)] hover:bg-[var(--app-chrome)]"
        >
          <PlusIcon className="size-3" />
          ADD NEW
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
    </>
  );
}
