import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export function DotsBackground({ children, className }: Props) {
  return (
    <div
      className={cn(
        "w-full bg-background dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center"
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-background"></div>
      <div className={className}>{children}</div>
    </div>
  );
}
