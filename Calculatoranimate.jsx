import React from "react";
import { motion } from "framer-motion";

const CalculatorAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 30 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 15px 35px rgba(0,0,0,0.2)",
      }}
      className="bg-white rounded-2xl shadow-xl p-6"
    >
      {children}
    </motion.div>
  );
};

export default CalculatorAnimation;
