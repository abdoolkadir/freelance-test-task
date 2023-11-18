/* eslint-disable react/no-unescaped-entities */
'use client';

import { HomepageNewGamingWebSection } from '@/utils/data.homepage';
import { font } from '@/utils/fonts';
import UserPills from '../Pills.tsx/UserPills';
import { useAnimation, useInView, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

type Props = {};
const NewGamingWebSection = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section id="value-section" className="py-24 relative px-5 lg:px-28 mb-28">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10 relative z-40">
        <div ref={ref} className="w-full">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.4, delay: 0.25 }}
            className={`${font.intergralCf} text-xl md:text-3xl lg:text-5xl text-[#E4E4E7] mb-8`}
          >
            The New<span className="block">Gaming Web</span>
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3, delay: 0.2 }}
            className={`${font.lexend} text-secondary text-xs md:text-sm`}
          >
            At the core of the XBorg Data Graph Protocol lies a
            <span className="block">
              dynamic and interconnected network of gaming profiles.
            </span>
            <span className="block">
              {' '}
              Each player's profile is represented as a unique ERC-721{' '}
            </span>
            <span className="block">
              NFT, complete with metadata unique to their gaming
            </span>
            <span className="block">journey</span>
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 md:gap-8 relative">
          {HomepageNewGamingWebSection.map(
            ({ username, image, code }, index: number) => (
              <UserPills
                key={index}
                username={username}
                code={code}
                image={image}
                right={!!(index % 2)}
              />
            )
          )}
        </div>
      </div>

      <div className="absolute right-0 bottom-0 z-10">
        <Image
          src="/images/bg-illustration.png"
          alt="Background image"
          width={600}
          height={300}
        />
      </div>
    </section>
  );
};
export default NewGamingWebSection;
