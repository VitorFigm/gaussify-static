import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function CTAButton(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "group cursor-pointer rounded-full border-4 border-transparent hover:border-primary bg-transparent p-1 transition-color duration-500",
        props.className
      )}
    >
      <Button
        size={"xl"}
        className="relative flex items-center justify-center gap-4 overflow-hidden rounded-lg px-6 py-4 font-bold text-white"
      >
        {props.children}
        <ArrowRight className="transition-all group-hover:translate-x-2 group-hover:scale-125" />
        <div
          className={cn(
            "absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]"
          )}
        />
      </Button>
    </div>
  );
}
