import { ComponentProps } from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

export const BackButton = (props: ComponentProps<typeof Button>) => {
  return (
    <Button variant="ghost" className="flex items-center gap-2" {...props}>
      <ArrowLeft className="w-4 h-4" />
      <span className="text-sm">Voltar</span>
    </Button>
  );
};
