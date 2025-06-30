import { assignRef } from "@/lib/ref";
import { HTMLProps, useRef, useEffect } from "react";

export const ExpandableTextArea = ({
  maxRows,
  submitOnEnter,
  ...props
}: HTMLProps<HTMLTextAreaElement> & {
  maxRows?: number;
  submitOnEnter?: boolean;
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textAreaRef.current && maxRows) {
      const lineHeight = parseInt(
        window.getComputedStyle(textAreaRef.current).lineHeight || "0",
        10
      );
      const maxHeight = lineHeight * maxRows;
      textAreaRef.current.style.maxHeight = `${maxHeight}px`;
    }
  }, [maxRows]);

  return (
    <textarea
      {...props}
      ref={(el) => {
        textAreaRef.current = el;
        if (props.ref) assignRef(props.ref, el);
      }}
      onChange={(e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
        props.onChange?.(e);
      }}
      onKeyDown={(e) => {
        if (!submitOnEnter) return;

        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          const el = e.target as HTMLTextAreaElement;
          el.form?.requestSubmit();
        }
      }}
    />
  );
};
