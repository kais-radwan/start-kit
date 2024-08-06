import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export function GridBackground({ children, className }: Props) {
  return (
    <div
      className={cn(
        "w-screen dark:bg-grid-white/[0.05] bg-grid-black/[0.1] relative"
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-background"></div>
      <div className={className}>{children}</div>
    </div>
  );
}
