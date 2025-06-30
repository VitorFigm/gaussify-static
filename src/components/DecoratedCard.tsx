import { ClassNameValue } from "tailwind-merge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

export const DecoratedCard = ({
  decorationClassName,
  ...props
}: React.ComponentProps<typeof Card> & {
  decorationClassName?: ClassNameValue;
}) => {
  return (
    <Card
      {...props}
      className={cn("relative overflow-hidden", props.className)}
    >
      <div
        className={cn(
          "[clip-path:ellipse(7rem_5rem_at_100%_0%)]",
          "absolute left-0 top-0 z-1 h-full w-full bg-primary",
          decorationClassName
        )}
      ></div>
      <div className="relative z-2">{props.children}</div>
    </Card>
  );
};

DecoratedCard.displayName = "DecoratedCard";
