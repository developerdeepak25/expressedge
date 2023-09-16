import React from 'react'
import './banner.scss'
import { motion } from 'framer-motion';

const TransitionImg = ({src}) => {
  return (
    <div className="transition-img">
      <motion.img
        src={src}
        alt="tranition-pic"
        layoutId="main-image"
        transition={{ ease: [0.6, 0.01, 0.05, 0.9], duration: 1.6 }}
      />
    </div>
  );
}

export default TransitionImg
