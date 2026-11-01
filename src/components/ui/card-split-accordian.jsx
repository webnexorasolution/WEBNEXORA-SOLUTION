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
      className={`card-split-accordian ${className}`}
      style={{
        cursor: "pointer",
        userSelect: "none",
        backgroundColor: isOpen ? "var(--lime, #B9FF66)" : "#F3F3F3",
        border: "1px solid var(--border-dark, #191A23)",
        borderRadius: "32px",
        boxShadow: "0 5px 0 var(--border-dark, #191A23)",
        padding: "28px 36px",
        transition: "background-color 0.25s ease, box-shadow 0.25s ease",
        overflow: "hidden",
      }}
    >
      <motion.div layout style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
        <motion.h3
          layout
          style={{
            margin: 0,
            fontFamily: "var(--font-heading, 'Space Grotesk', sans-serif)",
            fontSize: "20px",
            fontWeight: 600,
            color: "var(--dark, #191A23)",
          }}
        >
          {title}
        </motion.h3>
        <motion.span
          layout
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            backgroundColor: isOpen ? "#FFFFFF" : "#F3F3F3",
            border: "1px solid var(--border-dark, #191A23)",
            color: "var(--dark, #191A23)",
            flexShrink: 0,
          }}
        >
          <ChevronDown size={20} strokeWidth={2.6} />
        </motion.span>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{
              paddingTop: "18px",
              marginTop: "16px",
              borderTop: "1px solid var(--border-dark, #191A23)",
            }}
          >
            {children || (
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)",
                  fontSize: "16.5px",
                  lineHeight: 1.65,
                  color: "var(--dark, #191A23)",
                  fontWeight: 500,
                }}
              >
                {description}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default CardSplitAccordian;
