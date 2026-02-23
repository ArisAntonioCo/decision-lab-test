import Image from "next/image";
import { cn } from "@/lib/utils";

type SidebarLogoProps = {
  className?: string;
};

export function SidebarLogo({ className }: SidebarLogoProps) {
  return (
    <Image
      src="/logos/redpoint-sidebar-logo.svg"
      alt="Redpoint logo"
      width={165}
      height={20}
      className={cn("h-5 w-auto object-contain", className)}
    />
  );
}
