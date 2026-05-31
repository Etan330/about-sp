import { motion } from 'framer-motion';

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="text-xs font-mono text-cyber-dim tracking-widest">
        SCROLL
      </span>
      <div className="w-5 h-8 rounded-full border border-cyber-dim flex items-start justify-center p-1">
        <motion.div
          className="w-1 h-2 rounded-full bg-cyber-cyan"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}
