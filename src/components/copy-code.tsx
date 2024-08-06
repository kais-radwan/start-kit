"use client";

import { cn } from "@/lib/utils";
import { Code } from "@nextui-org/react";
import { IconCopy } from "@tabler/icons-react";
import { toast } from "sonner";

interface Props {
  code: string;
  className?: string;
  color?:
    | "secondary"
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
}

export default function CopyCode({ code, className, color }: Props) {
  return (
    <Code
      color={color ?? "secondary"}
      className={cn(
        "text-foreground border backdrop-blur bg-accent/50 hover:bg-accent/70 transition-all shadow-lg flex items-center gap-2 cursor-pointer group",
        className
      )}
      onClick={() => {
        navigator.clipboard.writeText(code);
        toast.success("Copied code");
      }}
    >
      <IconCopy size={16} />
      <span className="opacity-75 group-hover:opacity-100 transition-all">
        {code}
      </span>
    </Code>
  );
}
