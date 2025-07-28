import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";

export const Summary = ({
  content,
  className,
}: {
  content: string[];
  className?: string;
}) => {
  return (
    <Card className={cn("p-0",className)}>
      <Accordion type="single" collapsible className="px-4">
        <AccordionItem value="summary" className="p-2">
          <AccordionTrigger className="text-lg pl-4 cursor-pointer">Ver resumo do artigo</AccordionTrigger>
          <AccordionContent className="px-4 pb-3">
            <ul className="list-disc pl-5 space-y-2 text-text leading-relaxed">
              {content.map((item, summaryIndex) => (
                <li tabIndex={summaryIndex}>{item}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
