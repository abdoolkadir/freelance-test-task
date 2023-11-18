'use client';

import { HomepageValueSection } from '@/utils/data.homepage';
import { font } from '@/utils/fonts';
import Image from 'next/image';
import Card from '../cards/Card';
import { useEffect, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';

type Props = {};
const ValueSection = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  return (
    <section id="value-section" className="py-20 px-5 md:px-0 relative">
      <div ref={ref} className="text-center mb-8">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.4, delay: 0.25 }}
          className={`${font.intergralCf} text-xl md:text-6xl text-[#E4E4E7] mb-8`}
        >
          The value network<span className="block">of gaming</span>
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 45 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`${font.lexend} text-secondary text-sm`}
        >
          The fundamental protocol that allows anyone to create gaming
          applications
          <span className="block">built on top of player identities.</span>
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {HomepageValueSection.map(({ text, subtext, image }, index: number) => (
          <Card
            key={index}
            text={text}
            subtext={subtext}
            image={image}
            index={index}
          />
        ))}
      </div>

      <div className="absolute top-[100px] left-[-50px]">
        <Image
          src="/images/sphere-1.png"
          width={80}
          height={80}
          alt="background image element"
        />
      </div>
      <div className="hidden md:block absolute top-[250px] left-[50px]">
        <Image
          src="/images/sphere-2.png"
          width={55}
          height={55}
          alt="background image element"
        />
      </div>
    </section>
  );
};
export default ValueSection;
