/* eslint-disable no-undef */
import { motion } from 'framer-motion';
import { FC } from 'react';

type PropsType = FC<{ children: JSX.Element}>

const MaskTextEffect: PropsType = ({ children }) => (
  <div
    className="overflow-hidden"
  >
    <motion.div
      initial={{ translateY: '100%' }}
      whileInView={{ translateY: 0 }}
      transition={{
        bounce: 0.1,
        ease: 'easeInOut',
        delay: 0.5,
      }}
    >
      {children}
    </motion.div>
  </div>
);
export default MaskTextEffect;
