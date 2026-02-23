import { cn } from "@/lib/utils";

type PortfolioSummaryIllustrationProps = {
  className?: string;
};

export function PortfolioSummaryIllustration({
  className,
}: PortfolioSummaryIllustrationProps) {
  return (
    <img
      src="/illustrations/portfolio-summary-illustration.svg"
      alt="Portfolio summary illustration"
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
