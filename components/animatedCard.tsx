import {
  useScroll, useSpring, useTransform, motion,
} from 'framer-motion';
import Image from 'next/image';
import { useCallback } from 'react';
import avatar from '../assets/avatar.png';

const styles = {
  imageBox: 'sticky top-1/3 lg:col-span-4 flex items-center justify-center relative w-[260px] h-[260px] hidden lg:block',
  imageBoxPaper: 'absolute w-full h-full bg-decrease rounded-md',
  imageContainer: 'z-10 relative w-full h-full bg-increase rounded-md overflow-hidden',
};

const AnimatedCard = ({ scrollRef }) => {
  const { scrollYProgress } = useScroll({
    offset: ['start start', 'center end'],
  });
  const getAnimateValue = useCallback(
    (value: unknown[]) => useTransform(scrollYProgress, [0, 1], value),
    [],
  );
  const rotateValue = useSpring(getAnimateValue([165, 0]));
  const scaleValue = getAnimateValue([1, 0.8]);
  const scaleBoxValue = getAnimateValue([1, 0.9]);
  const radiusValue = getAnimateValue(['0px', '150px']);

  return (
    <motion.div
      viewport={{ root: scrollRef }}
      className={styles.imageBox}
    >
      <motion.div
        className={styles.imageBoxPaper}
        style={{ rotate: rotateValue, scale: scaleBoxValue, borderRadius: radiusValue }}
      />
      <motion.div
        className={styles.imageContainer}
        style={{ scale: scaleValue, borderRadius: radiusValue }}
      >
        <Image src={avatar} />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard;
