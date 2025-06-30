import { ComponentProps } from "react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Spinner from "./animata/Spinner";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type StatusButtonProps = ComponentProps<typeof Button> & {
  status?: "idle" | "pending" | "success" | "error";
  successMessage?: string;
  errorMessage?: string;
  pendingMessage?: string;
};

export function StatusButton({
  status = "idle",
  successMessage,
  pendingMessage,
  children,
  disabled,
  ...props
}: StatusButtonProps) {
  return (
    <Button disabled={disabled || status === "pending"} {...props}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          // Remount the component so that the animation can be restarted
          key={status}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.075 }}
          className={cn("flex items-center justify-center gap-1")}
        >
          {status === "success" && (
            <>
              <motion.span
                className="h-fit w-fit"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.075, type: "spring" }}
              >
                <CheckCircle2 className="h-4 w-4 fill-white stroke-teal-500 group-hover:stroke-teal-600" />
              </motion.span>
              {successMessage || children}
            </>
          )}

          {status === "pending" && (
            <>
              <Spinner className="h-4 w-4" />
              {pendingMessage || children}
            </>
          )}

          {(status === "idle" || status === "error") && children}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
