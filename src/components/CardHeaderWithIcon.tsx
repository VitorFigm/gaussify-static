import { cn } from "@/lib/utils";
import { CardHeader } from "./ui/card";

export function CardHeaderWithIcon({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <CardHeader
      data-slot="card-header"
      className={cn(
        "flex flex-row items-center justify-between space-y-0 pb-2 mb-4",
        className
      )}
      {...props}
    />
  );
}
