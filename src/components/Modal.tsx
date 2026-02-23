import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "../config";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function Modal({ open, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative pixel-card p-6 sm:p-8 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-pixel text-pixel-gold text-xs sm:text-sm mb-4 text-shadow-pixel">
              ⚡ Quick Spawn
            </h2>
            <p className="font-pixel text-[7px] text-gray-400 mb-6">
              You found the secret portal! Choose your destination:
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={SITE.links.min15}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn text-center bg-pixel-accent border-pixel-accent text-white no-underline font-pixel text-[9px]"
              >
                ⛏ 15 min BLOCKMeet
              </a>
              <a
                href={SITE.links.min30}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn text-center bg-pixel-green border-pixel-green text-pixel-dark no-underline font-pixel text-[9px]"
              >
                ⛏ 30 min BLOCKMeet
              </a>
            </div>
            <button
              onClick={onClose}
              className="mt-4 w-full font-pixel text-[7px] text-gray-500 hover:text-gray-300 cursor-pointer bg-transparent border-none transition-colors"
            >
              [ESC] Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
