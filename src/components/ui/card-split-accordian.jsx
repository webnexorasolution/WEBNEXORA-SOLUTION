import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function CardSplitAccordian({
  title = "Click to Expand",
  description = "This is a smooth expanding accordion built with Framer Motion.",
  children,
  className = "",
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.3, type: "spring", stiffness: 350, damping: 25 } }}
      onClick={() => setIsOpen(!isOpen)}
      className={`card-split-accordian p-4 rounded-xl bg-muted overflow-hidden ${className}`}
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      <motion.div layout className="flex items-center justify-between" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <motion.h3 layout className="text-lg font-medium" style={{ margin: 0 }}>
          {title}
        </motion.h3>
        <motion.span
          layout
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--blue, #4f46e5)" }}
        >
          <ChevronDown size={18} strokeWidth={2.5} />
        </motion.span>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="mt-2 text-muted-foreground"
          >
            {children || <p style={{ margin: "8px 0 0 0" }}>{description}</p>}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default CardSplitAccordian;
