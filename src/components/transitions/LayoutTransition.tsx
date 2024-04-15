"use client";

import { motion } from "framer-motion";
import React, { FC } from "react";

type LayoutTransitionType = {
  children: React.ReactNode;
};

const LayoutTransition: FC<LayoutTransitionType> = ({ children }) => {
  // TODO review template.ts in https://nextjs.org/docs/app/api-reference/file-conventions/template
  //   https://www.youtube.com/watch?v=jVU3JD6qOBo&ab_channel=HamedBahram
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.15 }}
    >
      {children}
    </motion.div>
  );
};

export default LayoutTransition;
