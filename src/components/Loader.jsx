import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
    <motion.div
      initial={{ scale: 0.6, opacity: 0.2 }}
      animate={{ rotate: 360, scale: 1, opacity: 1 }}
      transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
      className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full"
    />
  </div>
);

export default Loader;
