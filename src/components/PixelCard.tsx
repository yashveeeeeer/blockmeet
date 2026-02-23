import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PixelCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function PixelCard({
  children,
  delay = 0,
  className = "",
}: PixelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`pixel-card p-4 sm:p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
