import { cn } from "@/lib/utils";

type SidebarLogoProps = {
  className?: string;
};

export function SidebarLogo({ className }: SidebarLogoProps) {
  return (
    <img
      src="/logos/redpoint-sidebar-logo.svg"
      alt="Redpoint logo"
      className={cn("h-4 w-auto object-contain", className)}
    />
  );
}
