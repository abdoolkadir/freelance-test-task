'use client';

import { font } from '@/utils/fonts';
import { useAnimation, useInView, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

type Props = {
  text: string;
  subtext: string;
  image: string;
  index: number;
};
const Card = ({ text, subtext, image, index }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <div ref={ref} className="w-full h-full">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.35, delay: index * 0.25 }}
        className="w-full h-full border border-[#343434] rounded-lg py-4 px-5 hover:bg-[#070707] transition duration-300 ease-in-out"
      >
        <div className={`mb-8 ${font.lexend}`}>
          <p className="text-2xl text-[#E4E4E7] mb-4">{text}</p>
          <p className="text-sm text-secondary">{subtext}</p>
        </div>

        <Image
          src={image}
          height={80}
          width={80}
          alt="illustrative image"
          className="animate-tilting-animation"
        />
      </motion.div>
    </div>
  );
};
export default Card;
