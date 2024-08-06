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
        "w-56 md:w-96 lg:min-w-max text-foreground border backdrop-blur bg-accent/50 hover:bg-accent/70 transition-all shadow-lg flex items-center gap-2 cursor-pointer group",
        className
      )}
      onClick={() => {
        navigator.clipboard.writeText(code);
        toast.success("Copied code");
      }}
    >
      <IconCopy size={16} className="min-w-max" />
      <span className="opacity-75 group-hover:opacity-100 transition-all truncate">
        {code}
      </span>
    </Code>
  );
}
