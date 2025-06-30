import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export const Dot = (props: ComponentProps<"div">) => (
  <div
    {...props}
    className={cn("w-1.5 h-1.5 bg-purple-500 rounded-full", props.className)}
  ></div>
);
