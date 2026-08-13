import { motion } from "framer-motion";

export default function BadToGoodAnimation() {
  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      <svg viewBox="0 0 300 300" className="h-full w-full">
        <motion.g
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.55, 1], ease: "easeInOut" }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${40 + i * 8} ${60 + (i % 3) * 60} C ${100 + i * 10} ${20 + i * 15}, ${60 + i * 12} ${180 - i * 10}, ${220 - i * 6} ${140 + (i % 2) * 40}`}
              stroke="var(--color-coral-500)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              opacity={0.55}
            />
          ))}
        </motion.g>

        <motion.g
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.6, 1], ease: "easeInOut" }}
        >
          <circle cx="150" cy="150" r="70" fill="none" stroke="var(--color-teal-400)" strokeWidth="2" opacity="0.35" />
          <motion.path
            d="M115 150 L140 178 L192 118"
            stroke="var(--color-teal-500)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
      </svg>

      <motion.span
        className="absolute left-2 top-2 rounded-full px-3 py-1 text-xs font-semibold text-white"
        style={{ background: "var(--color-coral-500)" }}
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.55, 1], ease: "easeInOut" }}
      >
        Manual, messy, missed bugs
      </motion.span>
      <motion.span
        className="absolute right-2 bottom-2 rounded-full px-3 py-1 text-xs font-semibold text-white"
        style={{ background: "var(--color-teal-500)" }}
        animate={{ opacity: [0, 0, 1, 1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.6, 1], ease: "easeInOut" }}
      >
        Automated, clean, covered
      </motion.span>
    </div>
  );
}
