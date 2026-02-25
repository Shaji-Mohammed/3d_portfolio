"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  items: {
    postion: string;
    company: string;
    duration: string;
    desc: string;
  }[];
  contactInfo?: {
    title: string;
    description: string;
    buttonText: string;
    onContact?: () => void;
  };
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  ({ className, title, description, items, contactInfo, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 bg-gradient-to-b from-transparent via-muted/50 to-transparent w-full items-start", className)}
        {...props}
      >
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl max-w-xl m-auto sm:w-[80%] font-baskerville text-black-50 dark:text-white-50 mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text">
              {title}
            </h2>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-xl mx-auto space-y-2">
            {items.map((item, index) => (
              <FaqItem
                key={index}
                postion={item.postion}
                company={item.company}
                duration={item.duration}
                desc={item.desc}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    );
  },
);
FaqSection.displayName = "FaqSection";

// Internal FaqItem component
const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    postion: string;
    company: string;
    desc: string;
    duration: string;
    index: number;
  }
>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { postion, company, desc, duration, index } = props;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        "group rounded-sm",
        "transition-all duration-200 ease-in-out",

        isOpen
          ? ""
          : "hover:bg-muted/50",
      )}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 h-auto justify-between hover:bg-transparent"
      >
        <div className="text-left">
          <h3
            className={cn(
              "text-xl font-baskerville transition-colors duration-200 text-left",
              "text-foreground/70",
              isOpen && "text-foreground",
            )}
          >
            {postion}
          </h3>
          <span className={cn(
            "text-base font-baskerville",
            isOpen ? "text-foreground" : "text-muted-foreground"
          )}>
            {company}
          </span>
        </div>

        <div className="flex flex-col items-end">
          <span className={cn(
            "text-base font-baskerville",
            isOpen ? "text-foreground" : "text-muted-foreground"
          )}>
            {duration}
          </span>
          <motion.div
            animate={{
              rotate: isOpen ? 180 : 360,
              scale: isOpen ? 1.1 : 1,
            }}
            transition={{ duration: 0.2 }}
            className={cn(
              "p-0.5 rounded-full flex-shrink-0",
              "transition-colors duration-200",
              isOpen ? "text-primary" : "text-muted-foreground",
            )}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-4 py-2">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-base font-baskerville dark:text-white/70 text-black/80 leading-relaxed"
              >
                {desc}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItem.displayName = "FaqItem";

export { FaqSection };
