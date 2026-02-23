import { motion } from "framer-motion";
import { SITE } from "../config";

export default function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md mx-auto">
      <motion.a
        href={SITE.links.min15}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="pixel-btn flex-1 text-center bg-pixel-accent border-pixel-accent text-white no-underline"
      >
        <span className="block text-[10px] sm:text-xs">⛏ 15 min</span>
        <span className="block text-[7px] sm:text-[8px] mt-1 opacity-70">
          BLOCKMeet
        </span>
      </motion.a>

      <motion.a
        href={SITE.links.min30}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="pixel-btn flex-1 text-center bg-pixel-green border-pixel-green text-pixel-dark no-underline"
      >
        <span className="block text-[10px] sm:text-xs">⛏ 30 min</span>
        <span className="block text-[7px] sm:text-[8px] mt-1 opacity-70">
          BLOCKMeet
        </span>
      </motion.a>
    </div>
  );
}
