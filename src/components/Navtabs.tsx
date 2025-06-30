import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NabTabsProps extends React.ComponentPropsWithoutRef<"div"> {
  id: string;
  tabs: TabNode[];
  selectedTab?: TabNode;
  onTabChange?: (tab: TabNode) => void;
  indicator?: "line" | "fill";
  indicatorClassName?: string;
}

export default function NavTabs({
  tabs,
  selectedTab,
  onTabChange,
  id,
  indicator,
  indicatorClassName,
  ...props
}: NabTabsProps) {
  return (
    <div {...props} className={cn("flex mx-2", props.className)}>
      <NavTabsItems
        tabs={tabs}
        selectedTab={selectedTab}
        onTabChange={onTabChange}
        id={id}
        indicator={indicator}
        indicatorClassName={indicatorClassName}
      />
    </div>
  );
}

export function NavTabsItems({
  tabs,
  selectedTab,
  onTabChange,
  id,
  indicator,
  indicatorClassName,
}: NabTabsProps) {
  const initialTab =
    selectedTab || (typeof tabs[0] === "string" ? tabs[0] : tabs[0].value);

  const [selected, setSelected] = useState<TabNode>(initialTab);

  useEffect(() => {
    if (selectedTab) {
      setSelected(selectedTab);
    } else {
      setSelected(initialTab);
    }
  }, [selectedTab]);

  useEffect(() => {
    if (onTabChange) {
      onTabChange(selected);
    }
  }, [selected]);

  const isSelected = (tab: TabNode) => {
    if (typeof tab === "string") {
      return selected === tab;
    }

    return selected === tab.value;
  };

  return tabs.map((tab) => (
    <Tab
      indicator={indicator}
      id={id}
      node={tab}
      selected={isSelected(tab)}
      setSelected={setSelected}
      key={typeof tab === "string" ? tab : tab.value}
      indicatorClassName={indicatorClassName}
    />
  ));
}

export type TabNode =
  | string
  | { value: string; label: React.ReactNode; icon?: React.ReactNode };

interface TabProps {
  node: TabNode;
  selected: boolean;
  id: string;
  setSelected: React.Dispatch<React.SetStateAction<TabNode>>;
  indicator?: "line" | "fill";
  indicatorClassName?: string;
}

const Tab = ({
  node,
  selected,
  setSelected,
  id,
  indicator,
  indicatorClassName,
}: TabProps) => {
  const label = typeof node === "string" ? node : node.label;
  const value = typeof node === "string" ? node : node.value;

  return (
    <button
      onClick={() => setSelected(value)}
      className={cn("relative rounded-md p-2 text-sm transition-all", {
        "hover:text-primary-600 hover:tracking-wide": !selected,
        "text-primary-foreground": indicator != "line" && selected,
        "bg-primary": indicator === "fill" && selected,
      })}
    >
      <p className="relative z-50 min-w-20 flex items-center justify-center">
        {typeof node === "object" && node.icon ? (
          <span className="mr-2 inline-block">{node.icon}</span>
        ) : null}
        {label}
      </p>
      {selected && indicator != "line" && (
        <motion.span
          layoutId={id}
          transition={{ type: "spring", duration: 0.5 }}
          className={cn(
            "absolute inset-0 rounded-sm bg-primary",
            indicatorClassName
          )}
        />
      )}
      {selected && indicator === "line" && (
        <motion.span
          layoutId={id}
          transition={{ type: "spring", duration: 0.5 }}
          className={cn(
            "absolute bottom-0 left-0 h-1 w-full bg-primary",
            "rounded-sm",
            indicatorClassName
          )}
        />
      )}
    </button>
  );
};
